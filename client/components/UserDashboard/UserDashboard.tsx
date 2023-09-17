import { useQuery } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import { fetchCrewList } from '../../apis/api.ts'
import CrewDashboard from '../CrewDashboard/CrewDashboard.tsx'
import { Link, useNavigate } from 'react-router-dom'

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
      <ul data-testid="user-dashboard">
        {isAuthenticated &&
          uniqueName &&
          uniqueName.map((p, i) => (
            <li key={i} onClick={() => navigate(`/crew-dashboard/${p.id}`)}>
              <h1>{p.name}</h1>
              <img src={p.image} alt={p.name} />
            </li>
          ))}
      </ul>
      <button>ADD CREW</button>
    </>
  )
}

export default UserDashboard
