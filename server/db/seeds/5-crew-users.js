import { faker } from '@faker-js/faker'
export async function seed(knex) {
  faker.seed(123)

  const userIds = await knex('users').pluck('id')
  const eventIds = await knex('events').pluck('id')
  const crewIds = await knex('crews').pluck('id')

  const crewUsers = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    user_id: faker.helpers.arrayElement(userIds),
    event_id: faker.helpers.arrayElement(eventIds),
    crew_id: faker.helpers.arrayElement(crewIds),
  }))

  await knex('crew_users').insert(crewUsers)
}
