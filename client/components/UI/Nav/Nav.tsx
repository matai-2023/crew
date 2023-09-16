import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

interface Props {
  navOpened: boolean
  setNavOpened: () => void
}

function Nav(props: Props) {
  const { user, isAuthenticated, logout } = useAuth0()
  const { navOpened, setNavOpened } = props
  const navigate = useNavigate()

  const handleSignOut = () => {
    console.log('sign out')
    logout()
  }

  function goTo(link: string) {
    navigate(link)
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-90 text-white font-inter text-right p-4">
      <ul className="text-3xl">
        <li>
          {/* <button onClick={() => goTo('/create crew')}>Create crew</button> */}
        </li>
        <li>
          <button onClick={() => goTo('/profile')}>Edit profile</button>
        </li>
        <li>
          {isAuthenticated && <button onClick={handleSignOut}>Log out</button>}
        </li>
        <li>
          <button onClick={setNavOpened}>X</button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
