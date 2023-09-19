import { Profile } from '../../types/Profile.js'
import db from './connection.js'

// Get all CREWS of a User
export async function getCrewList(auth0id: string) {
  return db('crew_users')
    .join('crews', 'crews.id', 'crew_users.crew_id')
    .join('users', 'users.id', 'crew_users.user_id')
    .where('auth0id', auth0id)
    .select('crews.id', 'crews.name', 'crews.image')
    .distinct()
}

// Get all EVENTS of a Crew

export async function getEventsbyCrew(crewId: number) {
  return db('crew_users')
    .join('crews', 'crews.id', 'crew_users.crew_id')
    .join('events', 'events.id', 'crew_users.event_id')
    .where('crews.id', crewId)
    .select(
      'events.id as eventId',
      'events.name as name',
      'events.time as time',
      'events.address as address',

      'events.description as description',
      'events.date as date',
      'events.img as image'
    )
    .distinct()
}

// Get ONE event of a CREW

export async function getEventDetails(crewId: number, eventId: number) {
  return db('crew_users')
    .join('crews', 'crews.id', 'crew_users.crew_id')
    .join('events', 'events.id', 'crew_users.event_id')
    .where('crews.id', crewId)
    .where('events.id', eventId)
    .select(
      'events.name as name',
      'events.time as time',
      'events.address as address',
      'events.location as location',
      'events.description as description',
      'events.date as date',
      'events.img as img'
    )
    .distinct()
}

// USERS

// add or update new user
export async function addNewUser(profile: Profile) {
  await db('users')
    .insert({
      auth0id: profile.auth0Id,
      username: profile.username,
      email: profile.email,
      avatar: `images/avatars/${profile.avatar}`,
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

// GET ALL Members of a CREW

export async function getAllCrewMembers(crewId: number) {
  return await db('crew_users')
    .join('crews', 'crews.id', 'crew_users.crew_id')
    .join('users', 'users.id', 'crew_users.user_id')
    .where('crews.id', crewId)
    .select('users.id as userId', 'users.username')
    .distinct()
}
