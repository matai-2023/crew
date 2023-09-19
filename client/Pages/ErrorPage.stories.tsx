import type { Meta, StoryObj } from '@storybook/react'
import Background from '../components/UI/Background/Background'

import ErrorPage from './ErrorPage'
import {
  Route,
  RouterProvider,
  createMemoryRouter,
  createRoutesFromElements,
} from 'react-router-dom'

const meta: Meta<typeof ErrorPage> = {
  title: 'ErrorPage',
  component: ErrorPage,
}

type Story = StoryObj<typeof ErrorPage>

export const DisplayErrorPage: Story = {
  name: 'error Page',
  render: () => (
    <Background>
      <RouterProvider
        router={createMemoryRouter(
          createRoutesFromElements(<Route path="/" element={<ErrorPage />} />)
        )}
      ></RouterProvider>
    </Background>
  ),
}

export default meta
