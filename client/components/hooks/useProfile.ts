import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { upsertProfile } from '../../apis/api'
import { getUser } from '../../apis/api'
import { Profile, ProfileDraft } from '../../../types/Profile'

// This component adds user profile into the database

function useProfile() {
  const navigate = useNavigate()
  const { user, getAccessTokenSilently } = useAuth0()

  const queryClient = useQueryClient()
  const { data, isLoading } = useQuery({
    queryKey: ['user', user?.sub],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      if (user && user.sub) {
        const response = await getUser(accessToken)
        return response
      }
    },
  })

  const mutation = useMutation({
    mutationFn: ({
      form,
      token,
    }: {
      form: ProfileDraft | Profile
      token: string
    }) => upsertProfile(form, token),
    onSuccess: () => {
      queryClient.invalidateQueries(['user'])
      navigate('/crew-dashboard')
    },
  })

  return { data, isLoading, mutation }
}

export default useProfile
