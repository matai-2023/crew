import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

interface Props {
  toggleMenu: () => void
  showNav: boolean
}

function Nav(props: Props) {
  const { user, isAuthenticated, logout } = useAuth0()
  const navigate = useNavigate()

  const handleSignOut = () => {
    console.log('sign out')
    logout()
  }

  function goTo(link: string) {
    props.toggleMenu()
    navigate(link)
  }

  return (
    <nav className={`pt-16 pl-4 flex ${props.showNav ? 'block' : 'hidden'}`}>
      <ul className="text-3xl">
        <li>
          <button onClick={() => goTo('/new-event')}>Create Event</button>
        </li>
        <li>
          <button onClick={() => goTo('/Create Crew')}>Create Crew</button>
        </li>
        <li>{isAuthenticated && user && <p>Signed in as: {user?.email}</p>}</li>
        <li>
          {isAuthenticated && <button onClick={handleSignOut}>Log out</button>}
        </li>
      </ul>
    </nav>
  )
}

export default Nav
