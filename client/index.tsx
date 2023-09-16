import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { RouterProvider } from 'react-router-dom'

import routes from './components/routes.tsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

document.addEventListener('DOMContentLoaded', () => {
  const queryClient = new QueryClient()
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="matai-2023-hannah.au.auth0.com"
      clientId="v55PJUDa1Pqu5HddSg4jnRCQBpd61alR"
      authorizationParams={{
        redirect_uri: `${window.location.origin}/user-dashboard`,
        audience: 'https://crew/api',
      }}
      cacheLocation="localstorage"
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </Auth0Provider>
  )
})
export { routes }

