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

function AppLayout() {
  const { logout } = useAuth0()
  return (
    <>
      <button onClick={() => logout()}>logout</button>
      <Outlet />
    </>
  )
}

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="user-dashboard" element={<UserDashboard />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="crew-dashboard" element={<CrewDashboard />} />
      <Route path="event-details" element={<EventDetails />} />
      <Route path="new-event" element={<NewEvent />} />
    </Route>
  )
)

export default routes
