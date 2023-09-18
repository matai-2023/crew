import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { fetchCrewList } from '../../apis/api.ts'
import { useNavigate } from 'react-router-dom'
import { Crew } from '../../../types/Crew.ts'

// interface crews {
//   id: number
//   name: string
//   image: string
// }

function UserDashboard() {
  // Note: 'ADD CREW' is just a button for MVP

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()

  const { data, isLoading } = useQuery({
    queryKey: ['crews'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()

      const response = await fetchCrewList(accessToken)
      return response as Crew[]
    },
  })

  const navigate = useNavigate()
  return (
    <>
      {/* <p>{isLoading ? 'please wait' : ''}</p> */}
      <ul>
        {!isLoading &&
          isAuthenticated &&
          data &&
          data.map((crew) => (
            <li
              key={crew.id}
              onClick={() => navigate(`/crew-dashboard/${crew.id}`)}
            >
              <h1>{crew.name}</h1>
              <img src={crew.image} alt={crew.name} />
            </li>
          ))}
      </ul>
      <button>ADD CREW</button>
    </>
  )
}

export default UserDashboard
