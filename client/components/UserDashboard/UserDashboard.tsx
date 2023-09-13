import { Link } from 'react-router-dom'
import AddCrew from '../AddCrew/AddCrew.js'

function UserDashboard() {
  // TODO: call the useAuth0 hook and destructure getAccessTokenSilently

  //TODO: Read the database and map through it to display all Crews from user

  return (
    <>
      <ul>
        {' '}
        MyUserName`&lsquo;`s Crews
        <Link to={'/crew'}>
          <li>Skydiving</li>
        </Link>
        <Link to={'/crew'}>
          {' '}
          <li>Robot Poetry</li>{' '}
        </Link>
        <Link to={'/crew'}>
          <li>Cheeseburger</li>
        </Link>
        <Link to={'/crew'}>
          <li>Alien Fiesta</li>
        </Link>
      </ul>
      <AddCrew />
    </>
  )
}

export default UserDashboard
