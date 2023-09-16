import { Profile, ProfileDraft } from '../../../types/Profile'

interface Props {
  profile?: Profile
  handleSubmit: (profile: Profile | ProfileDraft) => void
}

function ProfileForm(props: Props) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const username = formData.get('username') as string
    const email = formData.get('email') as string
    const avatar = formData.get('avatar') as string

    const form = {
      username: username,
      email: email,
      avatar: avatar,
    }

    props.handleSubmit(form)
    // TODO: Add redirect to the user-dashboard here
    // TODO: Fix issue with image going to db as empty object instead of string
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="space-y-4 p-4">
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
          <input type="file" name="avatar" id="avatar" required></input>
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
