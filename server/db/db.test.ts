import { beforeAll, beforeEach, describe, it, expect } from 'vitest'

import db from './connection'
import { getCrewList } from './db'

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

describe('getCrewList', () => {
  it('returns a list of crews of logged-in account', async () => {
    const Auht0Id = 'auth0|6502325ffee50bd6057c4e09'
    const crewList = await getCrewList(Auht0Id)

    const expectedObject = {
      image:
        'https://images.unsplash.com/photo-1578592391689-0e3d1a1b52b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGhpa2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Managed systemic knowledge base',
    }

    console.log(crewList)

    expect(crewList).toHaveLength(4)
    expect(crewList).toContainEqual(expectedObject)
  })
})
