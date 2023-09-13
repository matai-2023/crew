import { Link } from 'react-router-dom'

function CrewDashboard() {
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
        This crew`&lsquo;`s events
        <div>
          <Link to={'/event_details'}>
            <li>Pirate Yoga Retreat</li>
          </Link>
          <p>7th Sep</p>
        </div>
        <div>
          <Link to={'/event_details'}>
            <li>Time-Traveling Karaoke Circus</li>
          </Link>
          <p>10th Sep</p>
        </div>
        <div>
          <Link to={'/event_details'}>
            <li>Underwater Pumpkin Carving</li>
          </Link>
          <p>20th Sep</p>
        </div>
        <div>
          <Link to={'/event_details'}>
            <li>Llama Lovers`&lsquo;` Roller Derby</li>
          </Link>
          <p>15th Oct</p>
        </div>
        <div>
          <Link to={'/event_details'}>
            <li>Haunted Ice Cream Social</li>
            <p>25th Oct</p>
          </Link>
        </div>
      </ul>
      <Link to={'/new-event'}>
        <button>Create</button>
      </Link>
    </>
  )
}

export default CrewDashboard
