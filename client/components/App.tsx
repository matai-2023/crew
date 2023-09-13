import { Routes, Route } from 'react-router-dom'

import LandingPage from './LandingPage.tsx'

function App() {
  //TODO: Create the routes to UserDashboard, CrewDashboard, EventDetails, etc
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route></Route>
      </Routes>
    </>
  )
}

export default App
