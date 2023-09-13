export async function seed(knex) {
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      auth0id: 'auth0|6502325ffee50bd6057c4e09',
      username: 'bananarama',
      email: 'banana@example.com',
      avatar: '../public/images/avatars/banana.gif',
    },
    {
      id: 2,
      auth0id: 'auth0|65023300b7dec599e055cccf',
      username: 'simon',
      email: 'simon@example.com',
      avatar: '../public/images/avatars/simon.jpg',
    },
  ])
}
