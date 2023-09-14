import express from 'express'
import * as db from '../db/db.ts'
import checkJwt from '../auth0.ts'

const router = express.Router()

// POST /api/v1/users
// this route is used for both creating and updating a user
router.post('/', checkJwt, async (req, res) => {
  const auth0Id = req.auth?.sub
  const form = req.body

  if (!auth0Id) {
    res.status(400).json({ message: 'Missing auth0 id' })
    return
  }

  if (!form) {
    res.status(400).json({ message: 'Please provide a form' })
    return
  }

  try {
    const profileResult = profileDraftSchema.safeParse(form)

    if (!profileResult.success) {
      res.status(400).json({ message: 'Invalid form' })
      return
    }

    if (profileResult.success) {
      const profile = { ...profileResult.data, auth0Id }
      await db.upsertProfile(profile)
      res.sendStatus(201)
      return
    }
  } catch (error) {
    res.status(500).json({ message: 'Unable to insert new user to database' })
  }
})
