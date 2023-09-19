//@vitest -environment jsdom

import { describe, it, expect, vi } from 'vitest'
import { renderComponent, renderWithRouter } from '../../test-utils'
import nock from 'nock'
import * as auth0 from '@auth0/auth0-react'
import userEvent from '@testing-library/user-event'
import {
  Route,
  RouterProvider,
  createMemoryRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import CrewDashboard from './CrewDashboard'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const user = userEvent.setup()
vi.mock('@auth0/auth0-react')
;(auth0 as auth0.User).useAuth0 = vi.fn().mockReturnValue({
  isAuthenticated: true,
  isLoading: false,
  getAccessTokenSilently: vi.fn(),
})

describe('Crew Dashboard', () => {
  it('a list of members should be displayed when button is clicked', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/crews/1')
      .reply(200, [
        {
          id: 1,
          name: 'banana',
        },
      ])
      .get('/api/v1/crews/4/members')
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
              <Route path="/:crewId" element={<CrewDashboard />}></Route>
            ),
            { initialEntries: ['/4'] }
          )}
        />
      </QueryClientProvider>
    )

    await user.click(screen.getByTestId('display-button'))
    const list = await screen.findByTestId('crew-member')
    expect(list).toBeInTheDocument()
    const viewCrew = screen.getByRole('button', { name: 'View my Crew' })
    expect(viewCrew).toBeInTheDocument()
  })
})
