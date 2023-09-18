import express from 'express'
import * as db from '../db/db.ts'
import checkJwt, { JwtRequest } from '../auth0.ts'

const router = express.Router()

// GET all crews
router.get('/', checkJwt, async (req: JwtRequest, res) => {
  try {
    const auth0Id = req.auth?.sub

    if (!auth0Id) {
      res.status(400).json({ message: 'Please provide an id' })
      return
    }

    const crews = await db.getCrewList(auth0Id)
    res.status(200).json(crews)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Could not find crew list' })
  }
})

//GET EVENTS to be displayed at a certain CREW
router.get('/:id', checkJwt, async (req: JwtRequest, res) => {
  const auth0Id = req.auth?.sub

  if (!auth0Id) {
    res.status(400).json({ message: 'Please provide an id' })
    return
  }
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
