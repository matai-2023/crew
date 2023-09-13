export async function seed(knex) {
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      auth0id: '123456789',
      username: 'bananarama',
      email: 'banana@example.com',
      avatar: '../public/images/avatars/banana.gif',
    },
    {
      id: 2,
      auth0id: '88888888',
      username: 'simon',
      email: 'simon@example.com',
      avatar: '../public/images/avatars/simon.jpg',
    },
  ])
}
