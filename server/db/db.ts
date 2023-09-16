import { Profile } from '../../types/Profile.js'
import db from './connection.js'

// CREWS
export async function getCrewList() {
  return db('crews').select()
}

// USERS

// add or update new user
export async function addNewUser(profile: Profile) {
  await db('users')
    .insert({
      auth0id: profile.auth0Id,
      username: profile.username,
      email: profile.email,
      avatar: profile.avatar,
    })
    // This part means that if an auth0id is already detected in the db, the user details associated with that auth0id will be updated
    .onConflict('auth0id')
    .merge()
}

// get an existing user
export async function getUser(auth0Id: string) {
  return await db('users')
    .where('auth0id', auth0Id)
    .first('auth0id as auth0Id', 'username', 'email', 'avatar')
}
