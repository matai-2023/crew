export async function seed(knex) {
  await knex('crew_users')
  await knex('events')
  await knex('crews')
  await knex('users')
}
