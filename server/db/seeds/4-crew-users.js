export async function seed(knex) {
  await knex('crew_users').del()
  await knex('crew_users').insert([
    {
      id: 1,
      user_id: 1,
      crew_id: 1,
      event_id:1,
    
    },
    {
      id: 2,
      user_id: 2,
      crew_id: 2,
      event_id: 2,
    
    },
  ])
}
