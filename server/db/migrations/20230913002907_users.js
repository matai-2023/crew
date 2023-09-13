export function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('auth0id')
    table.string('username')
    table.string('email')
    table.string('avatar')
  })
}

export function down(knex) {
  return knex.schema.dropTable('users')
}
