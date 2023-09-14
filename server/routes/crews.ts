import express from 'express'
import * as db from '../db/db.ts'

const router = express.Router()

// GET all CREWS by User
router.get('/:userId', async (req, res) => {
  try {
    const userId = Number(req.params.userId)
    const crews = await db.getCrewList(userId)
    res.json(crews)
    console.log(userId)
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not find crew list')
  }
})

export default router
