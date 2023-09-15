import { Link } from 'react-router-dom'
import AddCrew from '../AddCrew/AddCrew.js'
import { useQuery } from '@tanstack/react-query'
import { getCrewList } from '../../../server/db/db.js'
import { useAuth0 } from '@auth0/auth0-react'
import { fetchCrewList } from '../../apis/crews.js'

function UserDashboard() {
  // const { id } = useAuth0()
  // console.log(id)

  const { data } = useQuery(['crews'], fetchCrewList)
  console.log(data)
  // TODO: call the useAuth0 hook and destructure getAccessTokenSilently

  //TODO: Read the database and map through it to display all Crews from user
  // Note: 'ADD CREW' is just a button for MVP

  return (
    <>
      <ul>
        {data &&
          data.map((p, i) => (
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
