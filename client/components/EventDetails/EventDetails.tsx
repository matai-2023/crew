import { Link } from 'react-router-dom'

function EventDetails() {
  //TODO: Create logic to display the properties of an event
  //TODO: Display the event banner
  return (
    <>
      <div>Banner goes here</div>
      <ul>
        <li>Event Name</li>
        <li>Event time</li>
        <li>Event location</li>
        <li>Event description</li>
      </ul>
      <Link to={'/crew-dashboard'}>
        <button>Go back</button>
      </Link>
    </>
  )
}

export default EventDetails
