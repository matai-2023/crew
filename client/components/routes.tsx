import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import ProfilePage from './ProfilePage/ProfilePage.tsx'
import LandingPage from './LandingPage.tsx'
import UserDashboard from './UserDashboard/UserDashboard.tsx'
import CrewDashboard from './CrewDashboard/CrewDashboard.tsx'
import EventDetails from './EventDetails/EventDetails.tsx'
import NewEvent from './NewEvent/NewEvent.tsx'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import DashboardHeader from './UI/DashboardHeader/DashBoardHeader.tsx'
import Header from './UI/Header/Header.tsx'
import Background from './UI/Background/Background.tsx'
import Footer from './UI/Footer/Footer.tsx'
// import ErrorPage from './ErrorPage/ErrorPage.tsx'

function AppLayout() {
  const { logout } = useAuth0()
  return (
    <>
      <Background>
        <IfAuthenticated>
          <DashboardHeader />
        </IfAuthenticated>
        <IfNotAuthenticated>
          <Header />
        </IfNotAuthenticated>
        <button onClick={() => logout()}>logout</button>
        <Outlet />
        <Footer />
      </Background>
    </>
  )
}

// TODO: Implement protected components logic

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="user-dashboard" element={<UserDashboard />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="crew-dashboard/:crewId" element={<CrewDashboard />} />
      <Route path="event-details/:eventId" element={<EventDetails />} />
      <Route path="new-event" element={<NewEvent />} />
    </Route>
  )
)

export default routes
