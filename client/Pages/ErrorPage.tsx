import { Link } from 'react-router-dom'
import Button from '../components/UI/Button/Button'
import Background from '../components/UI/Background/Background'

function ErrorPage() {
  return (
    <>
      <Background>
        <div className="pt-44 pl-4 flex flex-col items-center gap-4 bg-darkPurple">
          <div className="flex flex-col items-center text-center">
            <img className="pb-10" alt="error logo" src={`./public/logo.png`} />
            <p>Something went wrong</p>
            <Button>
              <Link to="/">Home</Link>
            </Button>
          </div>
        </div>
      </Background>
    </>
  )
}

export default ErrorPage
