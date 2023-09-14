import { Link } from 'react-router-dom'
import { IfAuthenticated } from '../../Authenticated.tsx'
import Logo from '../Logo/Logo.tsx'
import Button from '../Button/Button.tsx'
import { useAuth0 } from '@auth0/auth0-react'

function Header() {
  const { user, logout } = useAuth0()

  const handleSignOut = () => {
    console.log('sign out')
    logout()
  }

  return (
    <div className="pl-4 pt-3 pr-4 flex justify-between items-center">
      <Link to="/" className="absolute top-0 right-0 mt-3 mr-4">
        <Logo />
      </Link>

      {/* Display username and logout button - to be styled  */}
      <IfAuthenticated>
        <Button onClick={handleSignOut}>Sign out</Button>
        {user && <p>Signed in as: {user?.email}</p>}
      </IfAuthenticated>
    </div>
  )
}

export default Header
