import { Routes, Route } from 'react-router-dom'

import Nav from './Nav.tsx'
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<p>my app</p>} />
      </Routes>
    </>
  )
}

export default App
