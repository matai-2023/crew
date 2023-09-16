import request from 'superagent'

export async function fetchCrewList() {
  const response = await request.get('/api/v1/crews/')
  return response.body
}

export async function fetchEventList(crewId: number) {
  const response = await request.get(`/api/v1/crews/${crewId}`)
  return response.body
}
