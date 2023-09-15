import express from 'express'
import * as db from '../db/db.ts'

const router = express.Router()

//GET /api/v1/crews/:id/event-details
router.get('/:id/event-details', async (req, res) => {
  try {
    const crewId = Number(req.params.id)
    const events = await db.getEventsbyCrew(crewId)
    res.json(events)
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not find event details')
  }
})

export default router
