import request from 'superagent'
import { Profile, ProfileDraft } from '../../types/Profile'
import { Crew } from '../../types/Crew'
import { Blob } from 'buffer'
import { AttendingStatus } from '../../types/Event'

const rootUrl = '/api/v1'

// POST new user data to users db
export async function upsertProfile(
  form: ProfileDraft | Profile,
  token: string
) {
  await request
    .post(`${rootUrl}/users`)
    .set('Authorization', `Bearer ${token}`)
    .send(form)
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

  return res.body
}

// GET all RSVPs to an event

export async function fetchAllRSVPs(token: string, eventId: number) {
  const res = await request
    .get(`${rootUrl}/crews/${eventId}/attending`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')

  return res.body
}

// POST rsvp to an event
export async function updateRSVP({
  attending,
  rsvpID,
  accessToken,
}: {
  attending: boolean
  rsvpID: number
  accessToken: string
}) {
  await request
    .post(`${rootUrl}/rsvps/${rsvpID}`)
    .set('Authorization', `Bearer ${accessToken}`)
    .send({ attending })
}

// GET CREW Members list
export async function fetchCrewMembers(token: string, crewId: number) {
  const response = await request
    .get(`/api/v1/crews/${crewId}/members`)
    .set('Authorization', `Bearer ${token}`)
  return response.body
}
