import { useState } from 'react'
import { Profile, ProfileDraft } from '../../../types/Profile'

interface Props {
  profile?: Profile
  handleSubmit: (form: Profile | ProfileDraft) => void
}

function ProfileForm(props: Props) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    props.handleSubmit(formData)
    // TODO: Add redirect to the user-dashboard here
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="space-y-4 p-4"
      >
        <div className="space-y-2">
          <label htmlFor="username">Username *</label>
          <input
            type="text"
            name="username"
            id="username"
            required
            defaultValue={props.profile?.username}
          ></input>
        </div>
        <div className="space-y-1">
          <label htmlFor="email">Email *</label>
          <input
            type="text"
            name="email"
            id="email"
            required
            defaultValue={props.profile?.email}
          ></input>
        </div>
        <div className="space-y-2">
          <label htmlFor="avatar">Avatar</label>
          <input type="file" name="image" id="avatar" accept="images/*"></input>
          <img src={props.profile?.avatar} alt={props.profile?.username} />
        </div>
        <div className="mx-auto text-center">
          <button>Save</button>
        </div>
      </form>
    </div>
  )
}

export default ProfileForm
