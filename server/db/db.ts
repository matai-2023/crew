import db from './connection.js'

export async function getCrewList(auth0id: string) {
  return db('crew_users')
    .join('crews', 'crews.id', 'crew_users.crew_id')
    .join('users', 'users.id', 'crew_users.user_id')
    .where('auth0id', auth0id)
    .select('crews.name', 'crews.image')
}
