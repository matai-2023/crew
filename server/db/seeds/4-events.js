import { faker } from '@faker-js/faker'

export async function seed(knex) {
  faker.seed(123)

  const crewIds = await knex('crews').pluck('id')

  const events = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    name: faker.company.catchPhrase(),
    time: faker.date.future().toLocaleTimeString(),
    location: faker.location.streetAddress(),
    description: faker.word.words({
      count: { min: 8, max: 20 },
    }),
    date: faker.date.future(),
    crew_id: faker.helpers.arrayElement(crewIds),
  }))

  await knex('events').insert(events)
}
//   ([
//     {
//       id: 1,
//       name: 'Dessert Banquet',
//       time: '2-5pm',
//       location: '12 Morgan St, Newmarket',
//       description: 'Ticket prices: Adult $18 , Children $9 ',
//       date: '3 October',
//       img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
//       crew_id: 1,
//     },
//     {
//       id: 2,
//       name: 'Scorpio Party',
//       time: '7pm-late night',
//       location: 'Cordis Hotel',
//       description:
//         'If you are a Scorpio as well, feel free to join this awesome Scorpio party!',
//       date: '20 November',
//       img: 'https://images.unsplash.com/photo-1485872299829-c673f5194813?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2054&q=80',
//       crew_id: 2,
//     },
//     {
//       id: 3,
//       name: 'Beach Burn',
//       time: '8pm-12am',
//       location: 'Mission Bay',
//       description: 'Grab your blanket and join in this beach burn party! ',
//       date: '27 December',
//       img: 'https://images.unsplash.com/photo-1567223238214-7d84610db404?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEJlYWNoJTIwQnVybnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
//       crew_id: 3,
//     },
//   ])
// }
