import express from 'express'
import * as db from '../db/db.ts'

const router = express.Router()

//GET /api/v1/crews/:id/event-details
router.get('/:crewId/event-details/:eventId', async (req, res) => {
  try {
    const crewId = Number(req.params.crewId)
    const eventId = Number(req.params.eventId)
    console.log(crewId)

    console.log(eventId)
    const events = await db.getEventDetails(crewId, eventId)
    res.json(events)
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not find event details')
  }
})

export default router
