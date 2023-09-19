//@vitest-environment jsdom

import { renderComponent } from '../../test-utils'
import { describe, it, expect } from 'vitest'
import LoginButton from './LoginButton'

describe('Login Button', () => {
  it('should render a log in button', async () => {
    const screen = renderComponent(<LoginButton />)
    const login = screen.getByRole('button')
    expect(login).toBeInTheDocument()
  })
})
