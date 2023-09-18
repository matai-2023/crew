import express from 'express'
import * as db from '../db/db.ts'
import checkJwt, { JwtRequest } from '../auth0.ts'

const router = express.Router()

//GET /api/v1/crews/:id/event-details
router.get(
  '/:crewId/event-details/:eventId',
  checkJwt,
  async (req: JwtRequest, res) => {
    try {
      const crewId = Number(req.params.crewId)
      const eventId = Number(req.params.eventId)

      const events = await db.getEventDetails(crewId, eventId)
      res.json(events)
    } catch (err) {
      console.log(err)
      res.status(500).send('Could not find event details')
    }
  }
)

router.get(
  '/:crewId/event-details/:eventId/attending',
  checkJwt,
  async (req: JwtRequest, res) => {
    try {
      const crewId = Number(req.params.crewId)
      const eventId = Number(req.params.eventId)

      const rsvps = await db.getAllRSVPs(crewId, eventId)
      res.json(rsvps)
    } catch (err) {
      console.log(err)
      res.status(500).send('Could not find rsvps')
    }
  }
)

export default router
