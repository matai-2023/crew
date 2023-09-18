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
      'events.location as location',
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

// GET ALL crew member rsvps to an event

// export async function getAllRSVPs(crewId: number, eventId: number) {
//   return await db('rsvps')
//     .join('crew_users', 'crew_users_id', 'crew_users.id')
//     .join('users', 'user_id', 'users.id')
//     .join('events', 'event_id', 'events.id')
//     .where('crew_id', crewId)
//     .where('events.id', eventId)
//     .select('users.id as userId', 'attending')
// }

export async function getAllRSVPs(crewId: number, eventId: number) {
  return await db('rsvps')
    .join('crew_users as cu', 'crew_users_id', 'cu.id')
    .join('crews ', 'cu.crew_id', 'crews.id')
    .join('users', 'user_id', 'users.id')
    .join('events as e', 'rsvps.event_id', 'e.id')
    .where('crewId', crewId)
    .where('e.id', eventId)
    .select(
      'rsvps.id as rsvpId',
      'users.id as userId',
      'crews.id as crewId',
      'users.username',
      'users.email',
      'e.name as eventName',
      'e.time',
      'e.location',
      'e.description',
      'e.date',
      'e.img',
      'attending'
    )
}
