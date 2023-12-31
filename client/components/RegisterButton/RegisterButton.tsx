import { useAuth0 } from '@auth0/auth0-react'
import Button from '../UI/Button/Button'

function RegisterButton() {
  const { loginWithRedirect } = useAuth0()

  function handleRegister() {
    loginWithRedirect({
      authorizationParams: {
        redirectUri: `${window.location.origin}/profile`,
        screen_hint: 'signup',
      },
    })
  }

  return <Button onClick={handleRegister}>Register</Button>
}

export default RegisterButton
