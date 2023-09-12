export function up(knex) {
  return knex.schema.createTable('crews', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('description')
  })
}

export function down(knex) {
  return knex.schema.dropTable('crews')
}
