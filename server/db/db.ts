import db from './connection.js'

// Get all CREWS from a User
export async function getCrewList(auth0id: string) {
  return db('crew_users')
    .join('crews', 'crews.id', 'crew_users.crew_id')
    .join('users', 'users.id', 'crew_users.user_id')
    .where('auth0id', auth0id)
    .select('crews.name', 'crews.image')
}

// Get all EVENTS from a Crew

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
