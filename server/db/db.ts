import db from './connection.js'

export  async function getCrewList() {
  return db('crews').select()
  
}