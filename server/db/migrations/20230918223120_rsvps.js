export function up(knex) {
  return knex.schema.createTable('rsvps', (table) => {
    table.increments('id').primary()
    table.integer('crew_users_id').references('crew_users.id')
    table.integer('event_id').references('events.id')
    table.boolean('attending')
  })
}

export function down(knex) {
  return knex.schema.dropTable('rsvps')
}
