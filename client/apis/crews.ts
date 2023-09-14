import request from 'superagent'

export async function fetchCrewList() {
  const response = await request.get('/api/v1/crews/')
  return response.body
}
