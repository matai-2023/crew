import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { fetchAllRSVPs } from '../../apis/api'
import { AttendanceData } from '../../../types/Event'
import useAttending from '../hooks/useAttending'

interface Props {
  eventId: number
  crewId: number
}

function RSVPs(props: Props) {
  console.log('props and event id', props)
  const { mutation } = useAttending()
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()

  const { data, isLoading } = useQuery({
    queryKey: ['rsvps'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      const response = await fetchAllRSVPs(accessToken, props.eventId)
      return response as AttendanceData[]
    },
  })

  function convertToBoolean(rsvp: string) {
    if (rsvp == '1') {
      return true
    }
    return false
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const rsvp = form.get('rsvp')?.valueOf() as string
    const formData = convertToBoolean(rsvp)

    const cId = props.crewId
    const eId = props.eventId
    const accessToken = await getAccessTokenSilently()

    const userRSVP = data && data.find((rsvp) => rsvp.auth0Id == user?.sub)

    console.log('data to mutate', {
      attending: formData,
      rsvpID: Number(userRSVP?.rsvpId),
      accessToken,
    })

    mutation.mutate({
      attending: formData,
      rsvpID: Number(userRSVP?.rsvpId),
      accessToken,
    })
  }

  return (
    <>
      {isLoading ? <p>data is loading...</p> : ''}

      {isAuthenticated && data && (
        <>
          <p>Going:</p>
          {data
            .filter((rsvp) => rsvp.attending)
            .map((rsvp) => (
              <>
                <img src={`${rsvp.avatar}`} alt={rsvp.username} />
              </>
            ))}
          <form onSubmit={handleSubmit}>
            <label htmlFor="rsvp">
              <p>RSVP to this event:</p>
            </label>
            <select name="rsvp">
              <option value="1">Going</option>
              <option value="0">Not going</option>
            </select>
            <button>Submit</button>
          </form>
        </>
      )}
    </>
  )
}

export default RSVPs
