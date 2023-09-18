import { faker } from '@faker-js/faker'
export async function seed(knex) {
  faker.seed(123)

  const crewUsersIds = await knex('crew_users').pluck('id')
  const eventIds = await knex('events').pluck('id')

  const rsvps = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    crew_users_id: faker.helpers.arrayElement(crewUsersIds),
    event_id: faker.helpers.arrayElement(eventIds),
    attending: false,
  }))

  await knex('rsvps').insert(rsvps)
}
