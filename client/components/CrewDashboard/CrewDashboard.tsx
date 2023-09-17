import { useAuth0 } from '@auth0/auth0-react'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchEventList } from '../../apis/api.ts'
import { useState } from 'react'

// interface Props {
//   id: number
// }

function CrewDashboard() {
  //TODO: Get the actual data to display USERS
  //TODO: Get the actual data to display EVENTS
  const { crewId } = useParams()
  const newId = Number(crewId)

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
  const { data, isLoading } = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      if (user && user.sub) {
        const response = await fetchEventList(accessToken, newId)
        return response
      }
    },
  })

  const [displayMembers, setDisplayMembers] = useState(false)
  console.log(data)

  function handleClick() {
    setDisplayMembers(!displayMembers)
  }

  return (
    <>
      {isLoading ? <p>data is loading...</p> : ''}

      <div>
        Members
        {displayMembers && (
          <ul>
            {isAuthenticated &&
              data &&
              data.map((user) => (
                <li key={user.id} data-testid="crew-member">
                  {`User: ${user.name}`}
                </li>
              ))}
          </ul>
        )}
        <button onClick={handleClick} data-testid="display-button">
          Show/Hide
        </button>
      </div>

      <ul>
        {data &&
          data.map((even) => (
            <li key={even.id}>
              <p>{even.name}</p>
              <p>{even.date}</p>
            </li>
          ))}
      </ul>

      <Link to={'/new-event'}>
        <button>Create</button>
      </Link>
      <Link to={'/user-dashboard'}>
        <button>Back to your dashboard</button>
      </Link>
    </>
  )
}

export default CrewDashboard
