import express from 'express'
import * as db from '../db/db.ts'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { AttendingStatus } from '../../types/Event.ts'

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

router.get('/:eventId/attending', checkJwt, async (req: JwtRequest, res) => {
  try {
    const userId = req.auth?.sub
    console.log(userId)

    if (!userId) {
      res.status(401).json({ message: 'sub is missing' })
      return
    }

    const eventId = Number(req.params.eventId)

    const rsvps = await db.getAllRSVPs(userId, eventId)
    res.json(rsvps)
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not find rsvps')
  }
})

router.post(
  '/:crewId/event-details/:eventId/attending',
  checkJwt,
  async (req: JwtRequest, res) => {
    const auth0Id = req.auth?.sub
    const rsvpId = Number(req.body.rsvpId)
    const rsvp = req.body.attending as AttendingStatus

    if (!auth0Id) {
      res.status(400).json({ message: 'Missing auth0 id' })
      return
    }
    try {
      await db.updateRSVP(rsvpId, rsvp)
      res.sendStatus(201)
    } catch (err) {
      console.log(err)
      res.status(500).send('Could not update rsvp')
    }
  }
)

export default router
