import express from 'express'
import * as db from '../db/db.js'
import checkJwt, { JwtRequest } from '../auth0.js'

const router = express.Router()

// POST /api/v1/rsvps
// this route is used for both creating and updating a user
router.post('/:id', checkJwt, async (req: JwtRequest, res) => {
  const auth0Id = req.auth?.sub
  const rsvpId = Number(req.params.id)
  const attending = req.body.attending

  if (!auth0Id) {
    res.status(400).json({ message: 'Missing auth0 id' })
    return
  }

  try {
    await db.updateRSVP(rsvpId, attending)
    res.send('ready to insert')
  } catch (error) {
    res.status(500).json({ message: 'Unable to update rsvp to database' })
  }
})

export default router
