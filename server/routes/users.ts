import express from 'express'
import * as db from '../db/db.ts'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { ProfileDraft } from '../../types/Profile.ts'

const router = express.Router()

// GET /api/v1/users
// this route is used to fetch a user's data
router.get('/', checkJwt, async (req: JwtRequest, res) => {
  const auth0Id = req.auth?.sub

  if (!auth0Id) {
    res.status(400).json({ message: 'Please provide an id' })
    return
  }

  try {
    const user = await db.getUser(auth0Id)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: 'Unable to retrieve user from database' })
  }
})

// POST /api/v1/users
// this route is used for both creating and updating a user
router.post('/', checkJwt, async (req: JwtRequest, res) => {
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
    const profileResult = form as ProfileDraft

    if (profileResult != form) {
      res.status(400).json({ message: 'Invalid form' })
      return
    }

    if (profileResult === form) {
      const profile = { ...profileResult, auth0Id }
      // TODO: Write upsertProfile db function in knex
      await db.addNewUser(profile)
      res.sendStatus(201)
      return
    }
  } catch (error) {
    res.status(500).json({ message: 'Unable to insert new user to database' })
  }
})

export default router
