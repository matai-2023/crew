export function up(knex) {
  return knex.schema.createTable('events', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('time')
    table.string('address')
    table.text('location')
    table.string('description')
    table.string('date')
    table.text('img')
    table.integer('crew_id').references('crews.id')
  })
}
export function down(knex) {
  return knex.schema.dropTable('events')
}
