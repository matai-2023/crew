import db from './connection.ts'

async function dropTables() {
  await db.schema.dropTableIfExists('crew_users')
  await db.schema.dropTableIfExists('events')
  await db.schema.dropTableIfExists('crews')
  await db.schema.dropTableIfExists('users')

  const tables = await db.raw(
    "SELECT tablename FROM pg_catalog.pg_tables WHERE schemaname != 'pg_catalog' AND schemaname != 'information_schema';"
  )

  for (const { tablename } of tables.rows) {
    await db.schema.dropTableIfExists(tablename)
    console.log(`Dropped table ${tablename}`)
  }

  // Close the database connection
  await db.destroy()
}

dropTables()
  .then(() => console.log('Tables dropped'))
  .catch((err) => console.log(err))
