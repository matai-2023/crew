import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { getUser } from '../../apis/api'

function CheckAuth() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
  //check user with useQuery see if they exist in our database
  // call useQuery user data from db
  const { isLoading, data } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      const response = await getUser(accessToken)
      return response
    },
  })

  // const auth0Stuff = useAuth0()
  // console.log('auth0Stuff', auth0Stuff)
  // console.log('data', isLoading, data)

  const navigate = useNavigate()
  useEffect(() => {
    //if user is in database navigate to /your-route
    //if not navigate to /profile
    const checkUser = async () => {
      if (isLoading) {
        return
      }

      if (data && data.auth0Id === user?.sub) {
        navigate('/user-dashboard')
      } else {
        navigate('/profile')
      }
    }

    if (isAuthenticated) {
      checkUser()
    }
  }, [data, user, isAuthenticated, isLoading, navigate])

  return <p>Redirecting you</p>
}

export default CheckAuth
