import express from 'express'
import * as db from '../db/db.ts'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { ProfileDraft } from '../../types/Profile.ts'
import upload from '../upload.js'

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
    console.error(error)
    res.status(500).json({ message: 'Unable to retrieve user from database' })
  }
})

// POST /api/v1/users
// this route is used for both creating and updating a user
router.post(
  '/',
  upload.single('image'),
  checkJwt,
  async (req: JwtRequest, res) => {
    const auth0Id = req.auth?.sub
    const data = {
      username: req.body.username,
      email: req.body.email,
      avatar: req.file?.filename as string,
    }
    console.log(req.body)
    console.log('data', data)

    if (!auth0Id) {
      res.status(400).json({ message: 'Missing auth0 id' })
      return
    }

    try {
      const profileResult = data as ProfileDraft

      //   // implement zod

      // const profileResult = {

      //   username: form.username,
      //   email: form.email,
      //   avatar: form.avatar,
      // }

      // if (profileResult !== form) {
      //   res.status(400).json({ message: 'Invalid form' })
      //   return
      // }

      if (profileResult === data) {
        const profile = { ...profileResult, auth0Id }
        console.log(profile)
        await db.addNewUser(profile)
        res.sendStatus(201)
        return
      }
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Unable to insert new user to database' })
    }
  }
)

export default router
