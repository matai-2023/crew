import { vi, describe, it, expect } from 'vitest'
import request from 'supertest'
import server from '../server'
import * as db from '../db/db.ts'

vi.mock('../db/db.ts')

describe('GET/api/v1/crews/', () => {
  it('it shold return 200 with an array', async () => {
    const fakeCrews = [
      {
        name: 'abc',
        image:
          'https://images.unsplash.com/photo-1608048608029-99c772d199ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
      },
      {
        name: 'Open-architected grid-enabled methodology',
        image:
          'https://images.unsplash.com/photo-1578592391689-0e3d1a1b52b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGhpa2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      },
    ]
    vi.mocked(db.getCrewList).mockResolvedValue(fakeCrews)
    const response = await request(server).get('/api/v1/crews/')
    expect(response.status).toBe(200)
    expect(response.body).toEqual(fakeCrews)
  })

  it('it should return 500 when no crew list is passed ', async () => {
    vi.mocked(db.getCrewList).mockRejectedValue(new Error('test'))
    const response = await request(server).get('/api/v1/crews/')
    expect(response.status).toBe(500)
    expect(response.body).toEqual({ message: 'Could not find crew list' })
  })
})
