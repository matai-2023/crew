import Button from '../UI/Button/Button'
import { useAuth0 } from '@auth0/auth0-react'

function LoginButton() {
  const { loginWithRedirect } = useAuth0()

  async function handleLogin() {
    await loginWithRedirect({
      redirectUri: `${window.location.origin}/user-dashboard`,
      screen_hint: 'login',
      authorizationParams: {
        redirectUri: `${window.location.origin}/user-dashboard`,
      },
    })
  }

  return <Button onClick={handleLogin}>Log in</Button>
}

export default LoginButton
