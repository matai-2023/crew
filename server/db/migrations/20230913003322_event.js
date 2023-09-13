export function up(knex) {
  return knex.schema.createTable('events', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('time')
    table.string('location')
    table.string('description')
    table.string('date')
    table.string('img')
    table.integer('crew_id').references('crews.id')
  })
}
export function down(knex) {
  return knex.schema.dropTable('events')
}
