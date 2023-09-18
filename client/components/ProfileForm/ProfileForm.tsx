import { Profile, ProfileDraft } from '../../../types/Profile'
import Button from '../UI/Button/Button'

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
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 p-3 mt-9">
          <label
            htmlFor="username"
            className="block text-white font-interReg mb-3"
          >
            Username *
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="border rounded-md w-full px-3 py-2 text-black font-interReg"
            required
            defaultValue={props.profile?.username}
          ></input>
        </div>
        <div className="mb-4 p-3">
          <label
            htmlFor="email"
            className="block text-white font-interReg mb-3"
          >
            Email *
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="border rounded-md w-full px-3 py-2 text-black font-interReg"
            required
            defaultValue={props.profile?.email}
          ></input>
        </div>

        {/* Avatar */}
        <div className="mb-4 p-3">
          <label
            htmlFor="avatar"
            className="block text-white font-interReg mb-3"
          >
            Avatar *
          </label>
          <input
            type="file"
            name="avatar"
            id="avatar"
            className="border rounded-md w-full px-3 py-2 text-black font-interReg"
            required
          ></input>
        </div>

        <div>
          <img
            src={props.profile?.avatar}
            className="rounded-full w-32 h-32 mx-auto mt-8"
            alt="User Avatar"
          />
        </div>

        <div className="mx-auto text-center mt-8">
          <Button>Save</Button>
        </div>
      </form>
    </div>
  )
}

export default ProfileForm
