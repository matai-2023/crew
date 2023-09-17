import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { fetchEventDetails } from '../../apis/api'
import Button from '../UI/Button/Button'

function EventDetails() {
  const timePath = '../../public/time.png'
  const locationPath = '../../public/location.png'
  const detailsPath = '../../public/details.png'
  const calendarPath = '../../public/calendar.png'

  //TODO: Create logic to display the properties of an event
  //TODO: Display the event banner
  const crewId = 1
  const eventId = 2
  const { data, isLoading } = useQuery(['events'], () =>
    fetchEventDetails(crewId, eventId)
  )
  console.log(data)

  return (
    <>
      {isLoading ? <p>data is loading...</p> : ''}

      {data &&
        data.map((eventDetails) => (
          <>
            <div>
              <img src={eventDetails.image} alt={eventDetails.name} />
            </div>
            <div>
              <li key={eventDetails.id}>
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
