//@vitest-environment jsdom

import { describe, it, expect, vi } from 'vitest'
import { renderComponent, renderWithRouter } from '../../test-utils'
import nock from 'nock'
import userEvent from '@testing-library/user-event'
import * as auth0 from '@auth0/auth0-react'
import {
  Route,
  RouterProvider,
  Routes,
  createMemoryRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import CrewDashboard from './CrewDashboard'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { waitFor } from '@testing-library/react'

const user = userEvent.setup()

vi.mock('@auth0/auth0-react')
;(auth0 as auth0.User).useAuth0 = vi.fn().mockReturnValue({
  isAuthenticated: true,
  isLoading: false,
  user: {
    sub: 'auth0|123',
  },
  getAccessTokenSilently: vi.fn(),
})

describe.skip('Crew Dashboard', () => {
  it('a list of members should be displayed when button is clicked', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/crews/2')
      .reply(200, [
        {
          id: 1,
          name: 'banana',
        },
      ])
    const fakeCrew = {
      id: 1,
    }

    const queryClient = new QueryClient()
    const screen = renderComponent(
      <QueryClientProvider client={queryClient}>
        <RouterProvider
          router={createMemoryRouter(
            createRoutesFromElements(
              <Route
                path="/"
                element={<CrewDashboard id={fakeCrew.id} />}
              ></Route>
            )
          )}
        />
      </QueryClientProvider>
    )

    await waitFor(() => expect(scope.isDone()).toBeTruthy())

    await user.click(screen.getByTestId('display-button'))
    const list = screen.getByTestId('crew-member')
    expect(list).toBeInTheDocument()
  })
})
