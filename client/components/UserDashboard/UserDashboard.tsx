import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { fetchCrewList } from '../../apis/api.ts'
import { useNavigate } from 'react-router-dom'
import Button from '../UI/Button/Button.tsx'
import { Crew } from '../../../types/Crew.ts'



function UserDashboard() {
  // Note: 'ADD CREW' is just a button for MVP

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()

  const { data, isLoading } = useQuery({
    queryKey: ['crews'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()

      const response = await fetchCrewList(accessToken)
      return response as Crew[]
    },
  })

  const navigate = useNavigate()
  return (
    <>
      {/* <p>{isLoading ? 'please wait' : ''}</p> */}
      <ul>
        {!isLoading &&
          isAuthenticated &&
          data &&
          data.map((crew) => (
            <li
              key={crew.id}
              onClick={() => navigate(`/crew-dashboard/${crew.id}`)}
            >
             <div className="bg-white p-3 mb-4 m-6 rounded-lg shadow-left-bottom-pink">
              <div className="flex flex-col items-center justify-center">
               <img src={crew.image} alt={crew.name} className="w-80 h-32 object-cover"/>
              <p className=" text-black text-center mt-2 font-interBold text-sm">
                    {crew.name}
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
