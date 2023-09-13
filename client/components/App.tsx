import { Routes, Route } from 'react-router-dom'

import LandingPage from './LandingPage.tsx'
import UserDashboard from './UserDashboard/UserDashboard.tsx'

function App() {
  //TODO: Create the routes to UserDashboard, CrewDashboard, EventDetails, etc
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/" />
      </Routes>
    </>
  )
}

export default App
