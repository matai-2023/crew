import express from 'express'
import * as db from '../db/db.ts'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    //  Todo: replace the hardcode Auth0 with Auth0 function
    const auth0 = 'auth0|6502325ffee50bd6057c4e09'
    const crews = await db.getCrewList(auth0)
    res.json(crews)
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not find crew list')
  }
})

export default router
