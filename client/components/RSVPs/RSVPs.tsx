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
          <div className="flex justify-between items-center mb-4">
            <div className="ml-4 mt-4 bg-black text-white py-2 px-4 rounded-lg shadow-left-bottom-pink">
              <form onSubmit={handleSubmit}>
                <label htmlFor="rsvp"></label>
                <select
                  className="mr-2 ml-3 font-interReg text-charcoalNotBlack p-2 py-2 text-sm font-bold bg-pinkDropShadow"
                  name="rsvp"
                >
                  <option value="1">GOING</option>
                  <option value="0">NOT GOING</option>
                </select>
                <button className="mr-2 ml-3 font-interReg text-white text-sm font-bold">
                  SUBMIT
                </button>
              </form>
            </div>
            <div className="flex justify-end pr-6 pt-6">
              {data
                .filter((rsvp) => rsvp.attending)
                .map((rsvp, index) => (
                  <img
                    key={index}
                    className={`rounded-full w-[40px] h-[40px] mx-[-5px]`}
                    src={`${rsvp.avatar}`}
                    alt={rsvp.username}
                  />
                ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default RSVPs
