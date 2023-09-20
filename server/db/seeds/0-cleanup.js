export async function seed(knex) {
  await knex('rsvps').del()
  await knex('crew_users').del()
  await knex('events').del()
  await knex('crews').del()
  await knex('users').del()
}
