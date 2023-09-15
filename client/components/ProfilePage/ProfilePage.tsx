import { useAuth0 } from '@auth0/auth0-react'
import ProfileForm from '../ProfileForm/ProfileForm'
import useProfile from '../../components/hooks/useProfile'
import { useEffect } from 'react'
import { ProfileDraft, Profile } from '../../../types/Profile'

function ProfilePage() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()

  const { data, isLoading, mutation } = useProfile()

  useEffect(() => {
    document.title = 'Edit My Profile'
  }, [])

  if (isLoading) {
    return <div>Loading ...</div>
  }

  if (!isAuthenticated && !user) {
    return <div>Not authenticated</div>
  }

  async function handleSubmit(form: ProfileDraft | Profile) {
    const token = await getAccessTokenSilently()
    mutation.mutate({ form, token })
  }

  const empty: Profile = {
    auth0Id: user?.sub || '',
    username: '',
    email: '',
    avatar: '',
  }

  return (
    <div>
      <ProfileForm handleSubmit={handleSubmit} profile={data || empty} />
    </div>
  )
}

export default ProfilePage
