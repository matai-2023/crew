import { useAuth0 } from '@auth0/auth0-react'

function RegisterButton() {
  const { loginWithRedirect } = useAuth0()

  function handleRegister() {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signin',
        //TODO: Add a profile form component and redirect line 14 to this
        // This is to add user details to the database
        redirect_uri: `${window.location.origin}/profile`,
      },
    })
  }

  return <button onClick={handleRegister}>Register</button>
}

export default RegisterButton
