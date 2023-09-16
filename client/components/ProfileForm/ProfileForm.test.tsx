//@vitest-environment jsdom

import { describe, it, expect, vi } from 'vitest'
import { screen } from '@testing-library/react'
import ProfileForm from './ProfileForm'
import { renderComponent } from '../../test-utils'
import { ProfileDraft } from '../../../types/Profile'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  Route,
  RouterProvider,
  createMemoryRouter,
  createRoutesFromElements,
} from 'react-router-dom'

describe('ProfileForm', () => {
  it('should call an event when the form is submitted', async () => {
    const handleSubmit = vi.fn((form: ProfileDraft) => {
      expect(form).toMatchObject({
        username: 'fakey',
        email: 'crew@example.com',
        avatar: 'img.png',
      })
    })

    const fakeFile = new File(['img'], 'img.png', { type: 'image/png' })

    const queryClient = new QueryClient()
    const { user } = renderComponent(
      <QueryClientProvider client={queryClient}>
        <RouterProvider
          router={createMemoryRouter(
            createRoutesFromElements(
              <Route
                path="/"
                element={<ProfileForm handleSubmit={handleSubmit} />}
              ></Route>
            )
          )}
        />
      </QueryClientProvider>
    )

    await user.type(screen.getByLabelText('Username *'), 'fakey')
    await user.type(screen.getByLabelText('Email *'), 'crew@example.com')
    await user.upload(screen.getByLabelText('Avatar'), fakeFile)

    const form = screen.getByRole('button', { name: 'Save' })
    await user.click(form)

    expect(handleSubmit).toHaveBeenCalled()
  })
})
