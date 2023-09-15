import express from 'express'
import * as db from '../db/db.ts'
import checkJwt from '../auth0.ts'

const router = express.Router()

router.get('/', checkJwt, async (req, res) => {
  try {
    const crews = await db.getCrewList()
    res.json(crews)
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not find crew list')
  }
})

export default router
