import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

interface Props {
  toggleMenu: () => void
}

function Nav(props: Props) {
  const { user, isAuthenticated, logout } = useAuth0()
  // const { toggleMenu } = props
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
    <nav className=" text-white font-interReg text-right p-4">
      <ul className="text-3xl">
        <li>
          <button onClick={() => goTo('/user-dashboard')}>My dashboard</button>
        </li>
        <li>
          <button onClick={() => goTo('/profile')}>Edit profile</button>
        </li>
        <li>
          {isAuthenticated && <button onClick={handleSignOut}>Log out</button>}
        </li>
      </ul>
    </nav>
  )
}

export default Nav
