import Button from '../UI/Button/Button'
import { useAuth0 } from '@auth0/auth0-react'

function LoginButton() {
  const { loginWithRedirect } = useAuth0()

  async function handleLogin() {
    await loginWithRedirect({
      appState: {
        returnTo: '/user-dashboard',
      },
      screen_hint: 'login',
    })
  }

  return <Button onClick={handleLogin}>Log in</Button>
}

export default LoginButton
