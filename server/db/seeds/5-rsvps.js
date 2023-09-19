import { faker } from '@faker-js/faker'
export async function seed(knex) {
  faker.seed(123)

  await knex('rsvps').insert([
    {
      id: 0,
      crew_users_id: 2,
      event_id: 2,
      attending: false,
    },
  ])
}
