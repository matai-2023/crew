import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { fetchAllRSVPs } from '../../apis/api'
import { AttendanceData } from '../../../types/Event'

interface Props {
  eventId: number
  crewId: number
}

function RSVPs(props: Props) {
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

  return (
    <>
      {isLoading ? <p>data is loading...</p> : ''}

      {isAuthenticated &&
        data &&
        data.map((rsvps) => (
          <>
            <p>{rsvps.username}</p>
            <p>{rsvps.attending}</p>
          </>
        ))}
    </>
  )
}

export default RSVPs
