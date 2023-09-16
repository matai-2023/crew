import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import Background from '../UI/Background/Background'
import DashboardHeader from '../UI/DashboardHeader/DashBoardHeader'
import { useQuery } from '@tanstack/react-query'
import { fetchEventList } from '../apis/crews'
import { useState } from 'react'
import Button from '../UI/Button/Button'

interface Props {
  id: number
}

function CrewDashboard(props: Props) {
  //TODO: Get the actual data to display USERS
  //TODO: Get the actual data to display EVENTS
  const crewId = 2
  const { data, isLoading } = useQuery(['events'], () => fetchEventList(crewId))

  const [displayMembers, setDisplayMembers] = useState(false)
  console.log(data)

  function handleClick() {
    setDisplayMembers(!displayMembers)
  }

  return (
    <>
      <div className="flex flex-col items-center justify-start min-h-screen mt-10">
        {isLoading ? <p>data is loading...</p> : ''}
        <div className="mt-4">
          {displayMembers && (
            <ul>
              {data.map((user) => (
                <li key={user.id} data-testid="crew-member">
                  {`User: ${user.name}`}
                </li>
              ))}
            </ul>
          )}
          <Button
            className="mt-4"
            onClick={handleClick}
            data-testid="display-button"
          >
            View my Crew
          </Button>
        </div>

        <ul className="p-5 mt-4">
          {data &&
            data.map((even) => (
              <li key={even.id}>
                <div className="bg-white p-3 mb-4 rounded-lg shadow-left-bottom-pink">
                  <div className="flex flex-col items-center justify-center">
                    <p className="font-interBold font-bold">{even.name}</p>
                    <p className="font-interReg">{even.date}</p>
                  </div>
                </div>
              </li>
            ))}
        </ul>
        <div className="mt-4">
          <Link to={'/new-event'}>
            <Button className="">Create Event</Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CrewDashboard
