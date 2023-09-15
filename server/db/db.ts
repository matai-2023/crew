import { Profile } from '../../types/Profile.js'
import db from './connection.js'

// Get all CREWS of a User
export async function getCrewList(auth0id: string) {
  return db('crew_users')
    .join('crews', 'crews.id', 'crew_users.crew_id')
    .join('users', 'users.id', 'crew_users.user_id')
    .where('auth0id', auth0id)
    .select('crews.name', 'crews.image')
}

// Get all EVENTS of a Crew

export async function getEventsbyCrew(crewId: number) {
  return db('crew_users')
    .join('crews', 'crews.id', 'crew_users.crew_id')
    .join('events', 'events.id', 'crew_users.event_id')
    .where('crews.id', crewId)
    .select(
      'events.name as name',
      'events.time as time',
      'events.location as location',
      'events.description as description',
      'events.date as date',
      'events.img as image'
    )
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
