import { vi, describe, it, expect } from 'vitest'
import request from 'supertest'
import server from '../server'
import * as db from '../db/db'
import { getMockToken } from './mockToken'
import { Profile } from '../../types/Profile'

vi.mock('../db/db')

// Test GET /api/v1/users
// this route is used to fetch a user's data

describe('Get /api/v1/users', () => {
  it('should return 200 with a user object', async () => {
    const fakeUser = {
      auth0id: 'auth0|123',
      username: 'fakey',
      email: 'crew@example.com',
      avatar: 'img',
    }

    vi.mocked(db.getUser).mockResolvedValue(fakeUser)
    const response = await request(server)
      .get('/api/v1/users')
      .set('authorization', `Bearer ${getMockToken()}`)
    expect(response.status).toBe(200)
    expect(response.body).toEqual(fakeUser)
  })

  it('should return 500 when no access token is passed', async () => {
    vi.mocked(db.getUser).mockRejectedValue(new Error('test'))
    const response = await request(server)
      .get('/api/v1/users')
      .set('authorization', `Bearer ${getMockToken()}`)
    expect(response.status).toBe(500)
    expect(response.body).toEqual({
      message: 'Unable to retrieve user from database',
    })
  })
})

// Test POST /api/v1/users
// this route is used for both creating and updating a user
