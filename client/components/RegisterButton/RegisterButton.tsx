import { useAuth0 } from '@auth0/auth0-react'
import Button from '../UI/Button/Button'

function RegisterButton() {
  const { loginWithRedirect } = useAuth0()

  function handleRegister() {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signin',
        // This is to add user details to the database
        redirect_uri: `${window.location.origin}/check-auth`,
      },
    })
  }

  return <Button onClick={handleRegister}>Register</Button>
}

export default RegisterButton
