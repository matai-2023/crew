import db from './connection.js'


// CREWS
export  async function getCrewList() {
  return db('crews').select()
  
}

// USERS  