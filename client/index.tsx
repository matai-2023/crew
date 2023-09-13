import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App.tsx'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    /**
     * Auth0Provider is a component that has a hook that provides
     * all authentication operations
     */
    <Auth0Provider
      domain="matai-2023-hannah.au.auth0.com"
      clientId="v55PJUDa1Pqu5HddSg4jnRCQBpd61alR"
      redirectUri={window.location.origin}
      audience="https://crew/api"
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  )
})
