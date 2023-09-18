import request from 'superagent'
import { Profile, ProfileDraft } from '../../types/Profile'
import { Crew } from '../../types/Crew'
import { Blob } from 'buffer'

const rootUrl = '/api/v1'

// POST new user data to users db
export async function upsertProfile(
  form: ProfileDraft | Profile,
  token: string
) {
  const reader = new FileReader()
  console.log(form.selectedFile)
  if (form.selectedFile) {
    const file = await reader.readAsArrayBuffer(form.selectedFile)
    console.log('api', file)
    await request
      .post(`${rootUrl}/users`)
      .set('Authorization', `Bearer ${token}`)
      .send({ username: form.username, email: form.email, avatar: form.avatar })
    // .attach('avatar')
  }
}

// GET user data from users db and set authorization token
export async function getUser(token: string) {
  const res = await request
    .get(`${rootUrl}/users`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')

  return res.body as Profile
}

export async function fetchCrewList(token: string) {
  const response = await request
    .get('/api/v1/crews/')
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')

  return response.body as Crew[]
}

// GET EVENTS of a Crew of an authorized user
export async function fetchEventList(token: string, crewId: number) {
  const response = await request
    .get(`/api/v1/crews/${crewId}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return response.body
}

// GET EVENT details of a Crew of an authorized user

export async function fetchEventDetails(
  token: string,
  crewId: number,
  eventId: number
) {
  const res = await request
    .get(`${rootUrl}/crews/${crewId}/event-details/${eventId}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  console.log('APIIIIIII: ', res.body)

  return res.body
}

// GET CREW Members list
export async function fetchCrewMembers(token: string, crewId: number) {
  const response = await request
    .get(`/api/v1/crews/${crewId}/members`)
    .set('Authorization', `Bearer ${token}`)
  return response.body
}
