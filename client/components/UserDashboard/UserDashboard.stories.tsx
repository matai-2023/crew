import type { Meta, StoryObj } from '@storybook/react'

import UserDashboard from './UserDashboard'

const meta: Meta<typeof UserDashboard> = {
  title: 'userDashboard',
  component: UserDashboard,
}

type Story = StoryObj<typeof UserDashboard>

export const loadUserDashboard: Story = {
  name: 'UserDashboard',
  render: () => <UserDashboard />,
}

export default meta
