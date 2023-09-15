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
    const fakeUser: Profile = {
      auth0Id: 'auth0|123',
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
describe('Post /api/v1/users', () => {
  it('should return 201 when creating a new user profile', async () => {
    const fakeUser: Profile = {
      auth0Id: 'auth0|123',
      username: 'fakey',
      email: 'crew@example.com',
      avatar: 'img',
    }

    vi.mocked(db.addNewUser).mockResolvedValue()
    const response = await request(server)
      .post('/api/v1/users')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(fakeUser)
    expect(response.status).toBe(201)
  })

  // it('should return 400 if form is invalid', async () => {
  //   const fakeUser = {
  //     invalidField: 'invalidvalue',
  //   }

  //   vi.mocked(db.addNewUser).mockResolvedValue()
  //   console.log('Sending request with form:', fakeUser)
  //   const response = await request(server)
  //     .post('/api/v1/users')
  //     .set('authorization', `Bearer ${getMockToken()}`)
  //     .send(fakeUser)
  //   expect(response.status).toBe(400)
  // })

  it('should return a 500 when no access token is passed', async () => {
    const fakeUser: Profile = {
      auth0Id: 'auth0|123',
      username: 'fakey',
      email: 'crew@example.com',
      avatar: 'img',
    }

    vi.mocked(db.addNewUser).mockRejectedValue(new Error('test'))
    const response = await request(server)
      .post('/api/v1/users')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(fakeUser)
    expect(response.status).toBe(500)
    expect(response.body).toEqual({
      message: 'Unable to insert new user to database',
    })
  })
})
