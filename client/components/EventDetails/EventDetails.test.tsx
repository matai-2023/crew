import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderComponent } from '../../test-utils'
import {
  Route,
  RouterProvider,
  createMemoryRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import EventDetails from './EventDetails'
import nock from 'nock'
import { describe, expect, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import * as auth0 from '@auth0/auth0-react'

const user = userEvent.setup()

vi.mock('@auth0/auth0-react')
;(auth0 as auth0.User).useAuth0 = vi.fn().mockReturnValue({
  isAuthenticated: true,
  isLoading: false,
  getAccessTokenSilently: vi.fn(),
})

describe('Event Details', () => {
  it('should render the details of an event', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/crews/4/event-details/2')
      .reply(200, [
        {
          userId: 1,
          username: 'banana',
        },
      ])

    const queryClient = new QueryClient()
    const screen = renderComponent(
      <QueryClientProvider client={queryClient}>
        <RouterProvider
          router={createMemoryRouter(
            createRoutesFromElements(
              <Route
                path="crew-dashboard/:crewId/event-details/:eventId"
                element={<EventDetails />}
              ></Route>
            ),
            { initialEntries: ['/crew-dashboard/4/event-details/2'] }
          )}
        />
      </QueryClientProvider>
    )
    const addEventbtn = screen.getByRole('button', { name: 'Message crew' })
    expect(addEventbtn).toBeInTheDocument()
  })
})
