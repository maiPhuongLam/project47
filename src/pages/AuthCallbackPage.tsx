import { useCreateUser } from '@/api/UserApi'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthCallbackPage = () => {
  const navigate = useNavigate()
  const { user } = useAuth0()
  const { creatUser } = useCreateUser()
  const hasCreatedUser = useRef(false)

  useEffect(() => {
    if (user?.sub && user.email && !hasCreatedUser.current) {
      creatUser({ auth0Id: user.sub, email: user.email })
      hasCreatedUser.current = true
    }
    navigate('/')
  }, [creatUser, navigate, user])
  return (
    <div>
      
    </div>
  )
}

export default AuthCallbackPage
