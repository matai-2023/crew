export async function seed(knex) {
  await knex('users').insert([
    {
      id: 1,
      auth0id: 'auth0|6502325ffee50bd6057c4e09',
      username: 'bananarama',
      email: 'banana@example.com',
      avatar: '/images/avatars/banana.gif',
    },
    {
      id: 2,
      auth0id: 'auth0|65023300b7dec599e055cccf',
      username: 'simon',
      email: 'simon@example.com',
      avatar: '/images/avatars/simon.jpg',
    },
    {
      id: 3,
      auth0id: 'auth0|650a310abc4a2acbef2ace66',
      username: 'Shazza',
      email: 'shazza@example.com',
      avatar: '/images/avatars/shazza.jpg',
    },
    {
      id: 4,
      auth0id: 'auth0|650a312d7e52c58fd7f222fc',
      username: 'Rodolfo',
      email: 'rodolfo@example.com',
      avatar: '/images/avatars/rodolfo.jpg',
    },
    {
      id: 5,
      auth0id: 'auth0|650a314e885d5db9401f0a6c',
      username: 'Lozza',
      email: 'lozza@example.com',
      avatar: '/images/avatars/lozza.jpg',
    },
    {
      id: 6,
      auth0id: 'auth0|650a317abc4a2acbef2aceb2',
      username: 'Handog',
      email: 'handog@example.com',
      avatar: '/images/avatars/handog.jpg',
    },
    {
      id: 7,
      auth0id: 'auth0|650a31990889cb9142729bfa',
      username: 'Jane',
      email: 'jane@example.com',
      avatar: '/images/avatars/jane.jpg',
    },
    {
      id: 8,
      auth0id: 'auth0|650a31ba7e52c58fd7f22367',
      username: 'Jared',
      email: 'jared@example.com',
      avatar: '/images/avatars/jared.jpg',
    },
    {
      id: 9,
      auth0id: 'auth0|650a31d60889cb9142729c39',
      username: 'Devon',
      email: 'devon@example.com',
      avatar: '/images/avatars/devon.jpg',
    },
    {
      id: 10,
      auth0id: 'auth0|650a31f77e52c58fd7f22398',
      username: 'Claire',
      email: 'claire@example.com',
      avatar: '/images/avatars/claire.jpg',
    },
  ])
}
