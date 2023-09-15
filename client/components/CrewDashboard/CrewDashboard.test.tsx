import { describe, it, afterEach, expect } from 'vitest'
import { cleanup } from '@testing-library/react'
import { renderComponent } from '../test-utils'

import userEvent from '@testing-library/user-event'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import CrewDashboard from './CrewDashboard'

afterEach(cleanup)

const user = userEvent.setup()

describe('CrewDashboard', () => {
  it('should render a list of crew members when Show/Hide button is clicked', async () => {
    const fakeCrew = {
      id: 1,
    }
    const queryClient = new QueryClient()
    const screen = renderComponent(
      <QueryClientProvider client={queryClient}>
        <CrewDashboard id={fakeCrew.id} />
      </QueryClientProvider>
    )
    await user.click(screen.getByTestId('display-button'))
    const list = screen.getByTestId('crew-member')
    expect(list).toBeInTheDocument()
  })
})
