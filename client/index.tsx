import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import AppLayout from './components/Applayout.tsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import LandingPage from './components/LandingPage.tsx'
import UserDashboard from './components/UserDashboard/UserDashboard.tsx'
import CrewDashboard from './components/CrewDashboard/CrewDashboard.tsx'
import EventDetails from './components/EventDetails/EventDetails.tsx'
import NewEvent from './components/NewEvent/NewEvent.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<AppLayout />}>
    <Route index element={<LandingPage />} />
    <Route path="/user-dashboard" element={<UserDashboard />} />
    <Route path="/crew-dashboard" element={<CrewDashboard />} />
    <Route path="/event-details" element={<EventDetails />} />
    <Route path="/new-event" element={<NewEvent />} />
  </Route>
)

function AppProvider() {
  return <RouterProvider router={createBrowserRouter(routes)} />
}

document.addEventListener('DOMContentLoaded', () => {
  const queryClient = new QueryClient()
  createRoot(document.getElementById('app') as HTMLElement).render(
    /**
     * Auth0Provider is a component that has a hook that provides
     * all authentication operations
     */
    <Auth0Provider
      domain="matai-2023-hannah.au.auth0.com"
      clientId="v55PJUDa1Pqu5HddSg4jnRCQBpd61alR"
      redirectUri={`${window.location.origin}/check-auth`}
      audience="https://crew/api"
    >
      <QueryClientProvider client={queryClient}>
        <AppProvider />
      </QueryClientProvider>
    </Auth0Provider>
  )
})
