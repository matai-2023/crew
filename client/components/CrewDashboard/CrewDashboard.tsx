import { useAuth0 } from '@auth0/auth0-react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchCrewMembers, fetchEventList } from '../../apis/api.ts'
import { useState } from 'react'
import Button from '../UI/Button/Button'
import { NewEvent } from '../../../types/Event.ts'

function CrewDashboard() {
  const { crewId } = useParams()
  const newId = Number(crewId)

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
  const { data, isLoading } = useQuery({
    queryKey: ['events', newId],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      const response = await fetchEventList(accessToken, newId)
      console.log('THE RESPONSE: ', response)

      return response as NewEvent[]
    },
  })

  const [displayMembers, setDisplayMembers] = useState(false)
  const [crewMembers, setCrewMembers] = useState([])

  async function allCrewMembers() {
    const accessToken = await getAccessTokenSilently()
    const response = await fetchCrewMembers(accessToken, newId)
    setCrewMembers(response)
  }

  async function handleClick() {
    if (!displayMembers) {
      await allCrewMembers()
    }
    setDisplayMembers(!displayMembers)
  }
  console.log('Crew Members: ', crewMembers)

  console.log('Event data:', data)

  const navigate = useNavigate()
  return (
    <>
      <div className="flex flex-col items-center justify-start min-h-screen mt-10">
        {isLoading ? <p>data is loading...</p> : ''}
        <div className="mt-4">
          {displayMembers && (
            <ul>
              {isAuthenticated &&
                crewMembers &&
                crewMembers.map((crewMember) => (
                  <li key={crewMember.userId} data-testid="crew-member">
                    {`User: ${crewMember.username}`}
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
            data.map((event) => (
              <li key={event.eventId}>
                <div
                  className="bg-white p-3 mb-4 rounded-lg shadow-left-bottom-pink"
                  onClick={() => navigate(`/event-details/${event.id}`)}
                >
                  <div className="flex flex-col items-center justify-center">
                    <p className="font-interBold font-bold">{event.name}</p>
                    <p className="font-interReg">{event.date}</p>
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
