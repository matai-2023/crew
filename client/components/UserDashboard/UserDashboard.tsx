import { Link } from 'react-router-dom'
import AddCrew from '../AddCrew/AddCrew.js'
import { useQuery } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import { fetchCrewList } from '../../apis/api.ts'

function UserDashboard() {
  // TODO: call the useAuth0 hook and destructure getAccessTokenSilently
  //TODO: Read the database and map through it to display all Crews from user
  // Note: 'ADD CREW' is just a button for MVP

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

  const [uniqueName, setUniqueName] = useState([] as crews[])

  console.log('data', data)

  useEffect(() => {
    if (!isLoading) {
      setUniqueName(filterDuplicatedName(data))
    }
  }, [data, isLoading])

  interface crews {
    name: string
    image: string
  }

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

  return (
    <>
      <p>{isLoading ? 'please wait' : ''}</p>
      <ul>
        {isAuthenticated &&
          uniqueName &&
          uniqueName.map((p, i) => (
            <li key={i}>
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
