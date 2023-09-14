import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { getUser } from '../../apis/api'

function CheckAuth() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
  //check user with useQuery see if they exist in our database
  // call useQuery user data from db
  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      const response = await getUser(accessToken)
      return response
    },
  })

  const navigate = useNavigate()
  useEffect(() => {
    //if user is in database navigate to /your-route
    //if not navigate to /profile
    const checkUser = async () => {
      if (data && data.auth0Id === user?.sub) {
        navigate('/user-dashboard')
      } else {
        navigate('/profile')
      }
    }

    if (isAuthenticated && !isLoading) {
      checkUser()
    }
  }, [data, user, isAuthenticated, isLoading, navigate])

  return <>{isLoading && <div>Loading...</div>}</>
}

export default CheckAuth
