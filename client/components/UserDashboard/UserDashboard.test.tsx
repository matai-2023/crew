//@vitest-environment jsdom

import * as auth0 from '@auth0/auth0-react'
import '@testing-library/jest-dom/vitest'
import { describe, it, expect, vi } from 'vitest'
import { screen } from '@testing-library/react'
import { renderComponent } from '../../test-utils'
import UserDashboard from './UserDashboard'
import userEvent from '@testing-library/user-event'
import nock from 'nock'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, waitFor } from '@testing-library/react'
import {
  Route,
  RouterProvider,
  createMemoryRouter,
  createRoutesFromElements,
} from 'react-router-dom'

vi.mock('@auth0/auth0-react')
;(auth0 as auth0.User).useAuth0 = vi.fn().mockReturnValue({
  isAuthenticated: true,
  isLoading: false,
  user: {
    sub: 'auth0|123',
  },
  getAccessTokenSilently: vi.fn(),
})

describe('UserDashboard', () => {
  it('should render a crew list of logged user when user logged in', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/crews/')
      .reply(200, [
        {
          name: 'Open-architected grid-enabled methodology',
          image:
            'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
        },
        {
          name: 'Quality-focused non-volatile emulation',
          image:
            'https://images.unsplash.com/photo-1578592391689-0e3d1a1b52b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGhpa2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        },
      ])

    const queryClient = new QueryClient()
    render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider
          router={createMemoryRouter(
            createRoutesFromElements(
              <Route path="/user-dashboard" element={<UserDashboard />}></Route>
            ),
            {
              initialEntries: ['/', '/user-dashboard'],
              initialIndex: 1,
            }
          )}
        />
      </QueryClientProvider>
    )
    await waitFor(() => expect(scope.isDone()).toBeTruthy())

    const list = screen.getByRole('heading', {
      name: 'Quality-focused non-volatile emulation',
    })

    expect(list).toBeInTheDocument()
  })
})
