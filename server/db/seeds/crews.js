export async function seed(knex) {
  await knex('crews').del()
  await knex('crews').insert([
    {
      id: 1,
      name: 'Hiking Pals',
      description: 'For those who love to hike!',
    },
    {
      id: 2,
      name: 'Party Legends',
      description: 'Join us legends down at the club',
    },
    {
      id: 3,
      name: 'Beach loungers',
      description: 'Bring a towel and sunbathe with us',
    },
  ])
}
