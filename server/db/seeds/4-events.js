import { faker } from '@faker-js/faker'

export async function seed(knex) {
  faker.seed(123)

  const crewIds = await knex('crews').pluck('id')
  const image = ['public/images/events/event2.png']
  const events = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    name: faker.company.catchPhrase(),
    time: faker.date.future().toLocaleTimeString(),
    location: faker.location.streetAddress(),
    description: faker.word.words({
      count: { min: 8, max: 20 },
    }),
    date: faker.date.future().toLocaleDateString(),
    img: image,
    crew_id: faker.helpers.arrayElement(crewIds),
  }))

  await knex('events').insert(events)
}
