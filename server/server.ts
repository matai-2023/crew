import * as Path from 'node:path'

import express from 'express'

import userRoutes from './routes/users.ts'
import crewRoutes from './routes/crews.ts'
import eventRoutes from './routes/events.ts'
import rsvpsRoutes from './routes/rsvps.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/users', userRoutes)
server.use('/api/v1/crews', crewRoutes)
server.use('/api/v1/crews', eventRoutes)
server.use('/api/v1/rsvps', rsvpsRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}
export default server
