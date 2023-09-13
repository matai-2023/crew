import LoginButton from './LoginButton/LoginButton'
import RegisterButton from './RegisterButton/RegisterButton'
import Background from './UI/Background/Background'

function LandingPage() {
  return (
    <>
      <Background>
        {/* TODO: Include the header with logo  */}
        <h1>Welcome to CREW</h1>
        <LoginButton />
        <RegisterButton />
      </Background>
    </>
  )
}

export default LandingPage
