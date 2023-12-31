import { afterEach } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Route,
  RouterProvider,
  createMemoryRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import '@testing-library/jest-dom/vitest'

import routes  from '../client/components/routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

afterEach(cleanup)

export function renderComponent(component: JSX.Element) {
  const user = userEvent.setup()
  return { user, ...render(component) }
}

export function renderWithRouter(location = '/') {
  const router = createMemoryRouter(routes, {
    initialEntries: [location],
  })

  userEvent.setup()
  return render(<RouterProvider router={router} />)
}

export function renderWithQuery(component: JSX.Element) {
  userEvent.setup()
  const queryClient = new QueryClient()

  return {
    user: userEvent,
    ...render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider
          router={createMemoryRouter(
            createRoutesFromElements(<Route path="/" element={component} />)
          )}
        />
      </QueryClientProvider>
    ),
  }
}
