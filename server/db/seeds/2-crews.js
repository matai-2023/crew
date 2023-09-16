import { faker } from '@faker-js/faker'

export async function seed(knex) {
  faker.seed(123)

  const imgs = [
    'https://images.unsplash.com/photo-1578592391689-0e3d1a1b52b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGhpa2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1608048608029-99c772d199ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
    'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    'https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  ]

  const crews = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    name: faker.company.catchPhrase(),
    description: faker.word.words({ count: { min: 8, max: 20 } }),
    image: faker.helpers.arrayElement(imgs),
  }))

  await knex('crews').insert(crews)

  // await knex('crews').insert([
  //   {
  //     id: 1,
  //     name: 'Hike the Heavens',
  //     description: 'Join us for morning hikes to the summit!',
  //     image:
  //       'https://images.unsplash.com/photo-1578592391689-0e3d1a1b52b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGhpa2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  //   },
  //   {
  //     id: 2,
  //     name: 'Thread of Legends',
  //     description: 'Legendary friends, legendary parties',
  //     image:
  //       'https://images.unsplash.com/photo-1608048608029-99c772d199ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
  //   },
  //   {
  //     id: 3,
  //     name: 'House of Homies',
  //     description: 'A place to chill with our best mates',
  //     image:
  //       'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
  //   },
  //   {
  //     id: 4,
  //     name: 'Java Scripters',
  //     description: 'We love all things programming!',
  //     image:
  //       'https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  //   },
  // ])
}
