import express from 'express'
import * as db from '../db/db.ts'
import checkJwt from '../auth0.ts'

const router = express.Router()

router.get('/', checkJwt, async (req, res) => {
  try {
    const auth0 = 'auth0|6502325ffee50bd6057c4e09'
    const crews = await db.getCrewList(auth0)
    res.json(crews)
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not find crew list')
  }
})

//GET EVENTS to be displayed at a certain CREW
router.get('/:id', async (req, res) => {
  try {
    const crewId = Number(req.params.id)
    const eventsList = await db.getEventsbyCrew(crewId)

    res.json(eventsList)
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not find event list')
  }
})

export default router
