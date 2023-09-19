import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { updateRSVP, upsertProfile } from '../../apis/api'
import { getUser } from '../../apis/api'
import { Profile, ProfileDraft } from '../../../types/Profile'
import { AttendingStatus } from '../../../types/Event'

// This component adds user rsvp to the database

function useProfile() {
  const navigate = useNavigate()
  const { getAccessTokenSilently, isAuthenticated } = useAuth0()

  const queryClient = useQueryClient()
  const { data, isLoading } = useQuery({
    queryKey: ['user', isAuthenticated],
    queryFn: async () => {
      if (isAuthenticated) {
        const accessToken = await getAccessTokenSilently()
        const response = await getUser(accessToken)
        return response
      } else {
        return null
      }
    },
  })

  const mutation = useMutation({
    mutationFn: ({
      attending,
      rsvpID,
      accessToken,
    }: {
      attending: boolean
      rsvpID: number
      accessToken: string
    }) => updateRSVP({ attending, rsvpID, accessToken }),
    onSuccess: () => {
      queryClient.invalidateQueries(['rsvps'])
      // navigate('/user-dashboard')
    },
  })

  return { data, isLoading, mutation }
}

export default useProfile
