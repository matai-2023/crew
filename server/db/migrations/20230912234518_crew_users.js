export function up(knex) {
  return knex.schema.createTable('crew_users', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.integer('crew_id').references('crews.id')
    table.integer('event_id').references('events.id')
  })
}

export function down(knex) {
  return knex.schema.dropTable('crew_users')
}
