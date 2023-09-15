import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import db from './connection'
import { addNewUser, getUser } from './db'
import { Profile } from '../../types/Profile'

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

afterAll(async () => {
  await db.destroy()
})

describe('getUser', () => {
  it('should return a user by their id', async () => {
    const userBananarama = await getUser('auth0|6502325ffee50bd6057c4e09')
    expect(userBananarama).toHaveProperty('username')
    expect(userBananarama).toHaveProperty('email')
    expect(userBananarama).toHaveProperty('avatar')
  })
})

describe('addNewUser', () => {
  it('should insert a new user into the database', async () => {
    const fakeUser: Profile = {
      auth0Id: 'auth0|123',
      username: 'fakey',
      email: 'crew@example.com',
      avatar: 'img',
    }

    await addNewUser(fakeUser)

    const user = await db('users')
      .where({ auth0id: fakeUser.auth0Id })
      .first('auth0id as auth0Id', 'username', 'email', 'avatar')

    expect(user).toMatchObject(fakeUser)
  })

  it('should update an existing user in the databse', async () => {
    const fakeUser: Profile = {
      auth0Id: 'auth0|6502325ffee50bd6057c4e09',
      username: 'fakey',
      email: 'crew@example.com',
      avatar: 'img',
    }

    await addNewUser(fakeUser)

    const user = await db('users')
      .where({ auth0id: fakeUser.auth0Id })
      .first('auth0id as auth0Id', 'username', 'email', 'avatar')

    expect(user).toMatchObject(fakeUser)
  })
})
