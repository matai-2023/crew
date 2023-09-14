import { Link } from 'react-router-dom'
import Background from '../UI/Background/Background'
import DashboardHeader from '../UI/DashboardHeader/DashBoardHeader'
import { useQuery } from '@tanstack/react-query'
import { fetchEventList } from '../apis/crews'

interface Props {
  id: number
}

function CrewDashboard(props: Props) {
  //TODO: Display a list of members when the button is clicked
  //TODO: Display a list of events when the page renders
  const crewId = props.id
  const { data, isLoading } = useQuery(['events'], () => fetchEventList(crewId))
  console.log(data)

  return (
    <>
      {isLoading ? <p>data is loading...</p> : ''}
      <Background>
        <DashboardHeader />
        <div>
          Members
          <ul>
            <li>Allan</li>
            <li>Steve</li>
            <li>Allan</li>
            <li>Allan</li>
            <li>All</li>
          </ul>
          <button>Show/Hide</button>
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
