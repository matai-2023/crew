import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import { fetchEventDetails } from '../../apis/api'
import Button from '../UI/Button/Button'
import { useAuth0 } from '@auth0/auth0-react'
import { NewEvent } from '../../../types/Event'
import request from 'superagent'
import Location from './Location'

function EventDetails() {
  const timePath = '/time.png'
  const locationPath = '/location.png'
  const detailsPath = '/details.png'
  const calendarPath = '/calendar.png'

  const { crewId, eventId } = useParams()
  const newEventId = Number(eventId)
  const newCrewId = Number(crewId)

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
  const { data, isLoading } = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      const response = await fetchEventDetails(
        accessToken,
        newCrewId,
        newEventId
      )
      return response as NewEvent[]
    },
  })
  if (data) {
    console.log('Event Details data: ', data)
  }

  return (
    <>
      {isLoading ? <p>data is loading...</p> : ''}

      {isAuthenticated &&
        data &&
        data.map((eventDetails) => (
          <>
            <div>
              <img src={eventDetails.img} alt={eventDetails.name} />
            </div>
            <div>
              <li key={eventDetails.eventId}>
                <p className=" text-white py-2 px-4 text-uppercase font-interBold text-xl">
                  {eventDetails.name}
                </p>
                <div className="border-t border-white my-2"></div>
                <p className="flex items-center text-white py-2 px-4 text-sm">
                  <img src={timePath} alt="Event Time" className="mr-2" />
                  <span className="font-interReg">{eventDetails.time}</span>
                </p>

                <p className="flex items-center text-white py-2 px-4 text-sm">
                  <img src={calendarPath} alt="Event Time" className="mr-2" />
                  <span className="font-interReg">{eventDetails.date}</span>
                </p>

                <p className="flex items-center text-white py-2 px-4 text-sm">
                  <img src={locationPath} alt="Event Time" className="mr-2" />
                  <span className="font-interReg">{eventDetails.location}</span>
                  <Location location={eventDetails.location} />
                </p>
                <div className="border-t border-white my-2"></div>

                <div className="flex items-start text-white py-2 px-4 text-base">
                  <img src={detailsPath} alt="Event Time" className="mr-2" />
                  <span className="font-interReg">
                    {eventDetails.description}
                  </span>
                </div>
                <br></br>
              </li>
            </div>
          </>
        ))}

      <Link
        className="flex flex-col items-center h-screen"
        to={'/crew-dashboard'}
      >
        <Button>Message crew</Button>
      </Link>
    </>
  )
}

export default EventDetails
