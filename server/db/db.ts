import db from './connection.js'

export async function getCrewList(userId: number) {
  return db('crews')
    .join('crew_users', 'crews.id', 'crew_users.crew_id')
    .join('users', 'users.auth0id', 'crew_users.user_id')
    .where('userId', userId)
    .select('crews.id')
}

export async function getCrewByUser(userId: number) {
  return db('crew_users')
    .join('users', 'auth0id', 'crew_users.user_id')
    .join('crew', 'crews.id', 'crew_users.crew_id')
    .where('crew_users.user_id', userId)
    .select(
      'crews.name as name',
      'crews.description as description',
      'crews.image as image'
    )
}
