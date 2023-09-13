import { Routes, Route } from 'react-router-dom'
import ProfilePage from './ProfilePage.tsx/ProfilePage.tsx'
import LandingPage from './LandingPage.tsx'
import UserDashboard from './UserDashboard/UserDashboard.tsx'
import CrewDashboard from './CrewDashboard/CrewDashboard.tsx'
import EventDetails from './EventDetails/EventDetails.tsx'
import NewEvent from './NewEvent/NewEvent.tsx'

function App() {
  // Profile takes a new registered user to the profile page/form when they finish Auth0 registration
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/crew-dashboard" element={<CrewDashboard />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/new-event" element={<NewEvent />} />
      </Routes>
    </>
  )
}

export default App
