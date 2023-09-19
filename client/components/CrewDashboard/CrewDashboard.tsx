import { useAuth0 } from '@auth0/auth0-react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchCrewMembers, fetchEventList } from '../../apis/api.ts'
import { useState } from 'react'
import Button from '../UI/Button/Button'
import { NewEvent } from '../../../types/Event.ts'

function formatEventDate(dateString) {
  if (!dateString) {
    return 'Invalid Date';
  }

  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return 'Invalid Date';
  }

  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });

  return `${day} ${month}`;
}

function CrewDashboard() {
  const { crewId } = useParams()
  const newId = Number(crewId)

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
  const { data, isLoading } = useQuery({
    queryKey: ['events', newId],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      const response = await fetchEventList(accessToken, newId)

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

  const navigate = useNavigate()
  return (
    <>
      <div className="flex flex-col items-center justify-start min-h-screen mt-10">
        {isLoading ? <p>data is loading...</p> : ''}
        <div>{newId }</div>

        <ul className="p-5 mt-4">
          {data &&
            data.map((event) => (
              <li key={event.eventId}>
                <div className="bg-white p-5 mb-4 rounded-lg shadow-left-bottom-pink mx-auto max-w-md max-w-screen-sm relative">
                  {' '}
                
                  <div className="absolute h-full border-l border-black left-2/3 top-0"></div>
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex-1">
                      <p className="font-interBold font-bold">{event.name}</p>
                    </div>
                    <div className="flex-1 text-right">
                      {' '}
                      <p className="font-interBold text-lg">
                        {' '}
                        {formatEventDate(event.date)}{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>

        <div className="flex mt-4">
          <div className="mr-2">
            <Button
              className="mt-4"
              onClick={handleClick}
              data-testid="display-button"
            >
              View Crew
            </Button>
          </div>

          <div className="ml-2">
            <div className="mt-4">
              <Link to={'/new-event'}>
                <Button className="">Create Event</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 ml-4">
          {displayMembers && (
            <ul>
              {isAuthenticated &&
                crewMembers &&
                crewMembers.map((crewMember) => (
                  <li
                    key={crewMember.userId}
                    data-testid="crew-member"
                    className="font-interReg text-white"
                  >
                    {`${crewMember.username}`}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}

export default CrewDashboard
