import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

function CrewDashboard() {

  const { isAuthenticated, getAccessTokenSilently } = useAuth0()
  //TODO: Display a list of members when the button is clicked
  //TODO: Display a list of events when the page renders
  return (
    <>
      <div>
        Members
        <ul>
          <li>Allan</li>
          <li>Steve</li>
          <li>Allan</li>
          <li>Allan</li>
          <li>All</li>
        </ul>
        <button>Show/Hide</button>
      </div>
      <ul>
        This crew&lsquo;s events
        <div>
          <Link to={'/event-details'}>
            <li>Pirate Yoga Retreat</li>
          </Link>
          <p>7th Sep</p>
        </div>
        <div>
          <Link to={'/event-details'}>
            <li>Time-Traveling Karaoke Circus</li>
          </Link>
          <p>10th Sep</p>
        </div>
        <div>
          <Link to={'/event-details'}>
            <li>Underwater Pumpkin Carving</li>
          </Link>
          <p>20th Sep</p>
        </div>
        <div>
          <Link to={'/event-details'}>
            <li>Llama Lovers&lsquo; Roller Derby</li>
          </Link>
          <p>15th Oct</p>
        </div>
        <div>
          <Link to={'/event-details'}>
            <li>Haunted Ice Cream Social</li>
            <p>25th Oct</p>
          </Link>
        </div>
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
