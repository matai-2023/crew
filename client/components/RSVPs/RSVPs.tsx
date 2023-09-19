import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { fetchAllRSVPs } from '../../apis/api'
import { AttendanceData, AttendingStatus } from '../../../types/Event'
import useAttending from '../hooks/useAttending'
import { useParams } from 'react-router-dom'

interface Props {
  eventId: number
  crewId: number
}

function RSVPs(props: Props) {
  const { mutation } = useAttending()
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
  const { data, isLoading } = useQuery({
    queryKey: ['rsvps'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      const response = await fetchAllRSVPs(
        accessToken,
        props.crewId,
        props.eventId
      )
      return response as AttendanceData[]
    },
  })

  const extractedId = data?.map((rsvp) => {
    rsvp.rsvpId
  })

  const rsvpID = Number(extractedId)

  async function handleSubmit(e) {
    const form = new FormData(e.currentTarget)
    const formData = Boolean(form)
    const cId = props.crewId
    const eId = props.eventId
    const accessToken = await getAccessTokenSilently()
    mutation.mutate({ formData, rsvpID, accessToken, cId, eId })
  }

  return (
    <>
      {isLoading ? <p>data is loading...</p> : ''}

      {isAuthenticated &&
        data &&
        data.map((rsvps) => (
          <>
            <p>{rsvps.username}</p>
            <p>{rsvps.attending == true ? rsvps.username : ''}</p>
          </>
        ))}
    </>
  )
}

export default RSVPs
