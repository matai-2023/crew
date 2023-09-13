import { useAuth0 } from '@auth0/auth0-react'

function LoginButton() {
  const { loginWithRedirect } = useAuth0()

  function handleLogin() {
    loginWithRedirect({
      authorizationParams: {
        redirect_uri: `${window.location.origin}/user-dashboard`,
      },
    })
  }

  return <button onClick={handleLogin}>Log in</button>
}

export default LoginButton
