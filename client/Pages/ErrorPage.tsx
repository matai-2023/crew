import { Link } from 'react-router-dom'
import Button from '../components/UI/Button/Button'
import Background from '../components/UI/Background/Background'
import DashboardHeader from '../components/UI/DashboardHeader/DashBoardHeader'

function ErrorPage() {
  const errorMsg = `Don't worry, you didn't break the internet, but we can't find what
  you're looking for.`
  return (
    <>
      <Background>
        <DashboardHeader />
        <div className="pt-44 pl-4 flex flex-col items-center gap-4 bg-darkPurple">
          <div className="flex flex-col items-center text-center">
            <p className="text-interBold text-lg font-bold text-white">OOPS!</p>
            <p className="text-interReg text-lg font-bold text-white p-7">
              {errorMsg}
            </p>
            <Button className="mt-10">
              <Link to="/user-dashboard">Go Home</Link>
            </Button>
          </div>
        </div>
      </Background>
    </>
  )
}

export default ErrorPage
