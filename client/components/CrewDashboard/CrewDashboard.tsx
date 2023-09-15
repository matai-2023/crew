import { Link } from 'react-router-dom'
import Background from '../UI/Background/Background'
import DashboardHeader from '../UI/DashboardHeader/DashBoardHeader'
import { useQuery } from '@tanstack/react-query'
import { fetchEventList } from '../apis/crews'
import { useState } from 'react'

interface Props {
  id: number
}

function CrewDashboard(props: Props) {
  //TODO: Get the actual data to display USERS
  //TODO: Get the actual data to display EVENTS
  const crewId = props.id
  const { data, isLoading } = useQuery(['events'], () => fetchEventList(crewId))

  const [displayMembers, setDisplayMembers] = useState(false)
  console.log(data)

  function handleClick() {
    setDisplayMembers(!displayMembers)
  }

  return (
    <>
      {isLoading ? <p>data is loading...</p> : ''}
      <Background>
        <DashboardHeader />
        <div>
          Members
          {displayMembers && (
            <ul>
              {data.map((user) => (
                <li key={user.id} data-testid="crew-member">
                  {user.name}
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
                <p>{even.time}</p>
              </li>
            ))}
        </ul>

        <Link to={'/new-event'}>
          <button>Create</button>
        </Link>
        <Link to={'/user-dashboard'}>
          <button>Back to your dashboard</button>
        </Link>
      </Background>
    </>
  )
}

export default CrewDashboard
