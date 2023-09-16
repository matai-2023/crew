import { faker } from '@faker-js/faker'

export async function seed(knex) {
  faker.seed(123)

  const crewIds = await knex('crews').pluck('id')
  const images = [
    'https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80',
    'https://images.unsplash.com/photo-1636955840493-f43a02bfa064?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  ]
  const events = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    name: faker.company.catchPhrase(),
    time: faker.date.future().toLocaleTimeString(),
    location: faker.location.streetAddress(),
    description: faker.word.words({
      count: { min: 8, max: 20 },
    }),
    date: faker.date.future().toLocaleDateString(),
    img: faker.helpers.arrayElement(images),
    crew_id: faker.helpers.arrayElement(crewIds),
  }))

  await knex('events').insert(events)
}
