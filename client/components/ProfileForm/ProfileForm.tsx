import { useState } from 'react'
import { Profile, ProfileDraft } from '../../../types/Profile'

interface Props {
  profile?: Profile
  handleSubmit: (form: Profile | ProfileDraft) => void
}

function ProfileForm(props: Props) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  function handleFileChange(e) {
    const file = e.target.files[0]
    setSelectedFile(file)
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const username = formData.get('username') as string
    const email = formData.get('email') as string
    const avatar = formData.get('avatar') as File
    if (selectedFile) {
      formData.append('avatar', selectedFile)
    }

    const form = {
      username: username,
      email: email,
      avatar: avatar.name,
      selectedFile: selectedFile,
    }

    console.log(form)

    props.handleSubmit(form)
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
          <input
            type="file"
            name="avatar"
            id="avatar"
            onChange={handleFileChange}
          ></input>
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
