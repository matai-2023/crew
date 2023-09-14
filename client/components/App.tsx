import { Routes, Route } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import LandingPage from './LandingPage.tsx'
import UserDashboard from './UserDashboard/UserDashboard.tsx'
import CrewDashboard from './CrewDashboard/CrewDashboard.tsx'
import EventDetails from './EventDetails/EventDetails.tsx'
import NewEvent from './NewEvent/NewEvent.tsx'
import Header from './UI/Header/Header.tsx'
import DashboardHeader from './UI/DashboardHeader/DashboardHeader.tsx'

function App() {
  //TODO: Create the routes to UserDashboard, CrewDashboard, EventDetails, etc
  return (
    <>
      <IfAuthenticated>
        <DashboardHeader />
      </IfAuthenticated>
      <IfNotAuthenticated>
        <Header />
      </IfNotAuthenticated>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/crew-dashboard" element={<CrewDashboard />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/new-event" element={<NewEvent />} />
      </Routes>
    </>
  )
}

export default App
