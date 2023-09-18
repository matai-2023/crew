import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import { fetchCrewList } from '../../apis/api.ts'
import { useNavigate } from 'react-router-dom'
import Button from '../UI/Button/Button.tsx'

interface crews {
  id: number
  name: string
  image: string
}

function UserDashboard() {
  // Note: 'ADD CREW' is just a button for MVP
  const [uniqueName, setUniqueName] = useState([] as crews[])

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
  const { data, isLoading } = useQuery({
    queryKey: ['crews'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()

      if (user && user.sub) {
        const response = await fetchCrewList(accessToken)
        return response
      }
    },
  })

  useEffect(() => {
    if (!isLoading) {
      setUniqueName(filterDuplicatedName(data))
    }
  }, [data, isLoading])

  function filterDuplicatedName(array: crews[]) {
    // const mySet = new Set()
    return array
      ? array.reduce((acc: crews[], p: crews) => {
          return acc.find((obj: crews) => obj.name == p.name)
            ? acc
            : [...acc, p]
        }, [])
      : []
  }
  const navigate = useNavigate()
  return (
    <>
      <p>{isLoading ? 'please wait' : ''}</p>
      <ul>
        {isAuthenticated &&
          uniqueName &&
          uniqueName.map((p, i) => (
            <li key={i} onClick={() => navigate(`/crew-dashboard/${p.id}`)}>
              <div className="bg-white p-3 mb-4 m-6 rounded-lg shadow-left-bottom-pink">
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-80 h-32 object-cover"
                  />
                  <p className=" text-black text-center mt-2 font-interBold text-sm">
                    {p.name}
                  </p>
                </div>
              </div>
            </li>
          ))}
      </ul>
      <div className="flex justify-center items-center p-7">
        <Button data-testid="display-button">ADD CREW</Button>
      </div>
    </>
  )
}

export default UserDashboard
