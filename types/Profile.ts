// USER PROFILE DATA
export interface Profile extends ProfileDraft {
  auth0Id: string
}

export interface ProfileDraft {
  username: string
  email: string
  avatar: string
}
