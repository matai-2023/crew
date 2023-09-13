import request from 'superagent'
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
    .set('Content-Type', 'aplication/json')
    .send(form)
}
