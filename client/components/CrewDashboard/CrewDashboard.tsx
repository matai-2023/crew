import { Link } from 'react-router-dom'
import Background from '../UI/Background/Background'
import DashboardHeader from '../UI/DashboardHeader/DashBoardHeader'
import { useQuery } from '@tanstack/react-query'
import { fetchEventList } from '../apis/crews'
import { useState } from 'react'

interface Props {
  id: number
}

function CrewDashboard(props: Props) {
  //TODO: Display a list of members when the button is clicked
  //TODO: Display a list of events when the page renders
  const crewId = props.id
  const { data, isLoading } = useQuery(['events'], () => fetchEventList(crewId))

  const [displayMembers, setDisplayMembers] = useState(false)
  console.log(data)

  function handleClick() {
    setDisplayMembers(!displayMembers)
  }

  return (
    <>
      {isLoading ? <p>data is loading...</p> : ''}
      <Background>
        <DashboardHeader />
        <div>
          Members
          {displayMembers && (
            <ul>
              <li>Allan</li>
              <li>Steve</li>
              <li>Allan</li>
              <li>Allan</li>
              <li>All</li>
            </ul>
          )}
          <button onClick={handleClick}>Show/Hide</button>
        </div>
        <ul>
          {data && data.map((even) => <li key={even.id}>{even.name}</li>)}
        </ul>
        <Link to={'/new-event'}>
          <button>Create</button>
        </Link>
        <Link to={'/user-dashboard'}>
          <button>Back to your dashboard</button>
        </Link>
      </Background>
    </>
  )
}

export default CrewDashboard
