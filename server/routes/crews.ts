import express from 'express'
import * as db from '../db/db.ts'

const router = express.Router()

router.get('/', async(req,res)=>{
  try{
    const crews= await db.getCrewList()
    res.json(crews)
  } catch(err){
    console.log(err)
    res.status(500).send('Could not find crew list')
  }
})