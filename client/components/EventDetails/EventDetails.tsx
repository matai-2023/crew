import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { fetchEventDetails } from '../../apis/api'
import Background from '../UI/Background/Background'
import DashboardHeader from '../UI/DashboardHeader/DashBoardHeader'

function EventDetails() {
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
      <Background>
        <DashboardHeader />
        {data &&
          data.map((eventDetails) => (
            <>
              <div>{eventDetails.image}</div>
              <p>Event Details</p>
              <li key={eventDetails.id}>
                <p>{eventDetails.name}</p>
                <p>{eventDetails.time}</p>
                <p>{eventDetails.location}</p>
                <p>{eventDetails.date}</p>
              </li>
            </>
          ))}

        <Link to={'/crew-dashboard'}>
          <button>Go back</button>
        </Link>
      </Background>
    </>
  )
}

export default EventDetails
