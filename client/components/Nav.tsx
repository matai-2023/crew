import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'

function Nav() {
  // TODO: call the useAuth0 hook and destructure user, logout, and loginWithRedirect
  // TODO: replace placeholder user object with the one from auth0
  const user = {
    nickname: 'john.doe',
  }

  const handleSignOut = () => {
    console.log('sign out')
  }

  const handleSignIn = () => {
    console.log('sign in')
  }

  return (
    <>
      <IfAuthenticated>
        <button onClick={handleSignOut}>Sign out</button>
        {user && <p>Signed in as: {user?.nickname}</p>}
      </IfAuthenticated>
      <IfNotAuthenticated>
        <button onClick={handleSignIn}>Sign in</button>
      </IfNotAuthenticated>
      <h1>Fruit FTW!</h1>
    </>
  )
}

export default Nav
