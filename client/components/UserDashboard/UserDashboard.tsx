import { Link } from 'react-router-dom'
import AddCrew from '../AddCrew/AddCrew.js'
import { useAuth0 } from '@auth0/auth0-react'

function UserDashboard() {
  // TODO: call the useAuth0 hook and destructure getAccessTokenSilently
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()

  //TODO: Read the database and map through it to display all Crews from user

  return (
    <>
      {isAuthenticated && (
        <>
          <ul>
            {' '}
            MyUserName&lsquo;s Crews
            <Link to={'/crew-dashboard'}>
              <li>Skydiving</li>
            </Link>
            <Link to={'/crew-dashboard'}>
              {' '}
              <li>Robot Poetry</li>{' '}
            </Link>
            <Link to={'/crew-dashboard'}>
              <li>Cheeseburger</li>
            </Link>
            <Link to={'/crew-dashboard'}>
              <li>Alien Fiesta</li>
            </Link>
          </ul>
          <AddCrew />
        </>
      )}
    </>
  )
}

export default UserDashboard
