// STRETCH: Consider validating input data using Zod

// USER PROFILE DATA
export interface Profile extends ProfileDraft {
  auth0Id: string
}

export interface ProfileDraft {
  username: string
  email: string
  avatar: string
  selectedFile: File | null | Blob
}
