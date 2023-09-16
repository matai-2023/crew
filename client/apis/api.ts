import request, { get } from 'superagent'
import { Profile, ProfileDraft } from '../../types/Profile'

const rootUrl = '/api/v1'

// POST new user data to users db
export async function upsertProfile(
  form: ProfileDraft | Profile,
  token: string
) {
  await request
    .post(`${rootUrl}/users`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
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
