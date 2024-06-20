import { useAuth0 } from '@auth0/auth0-react'
import { Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth0()
  
  // return isAuthenticated ? (<Outlet />) : (<Navigate to='/' replace />)
  return isAuthenticated ? (<Outlet />) : (<Outlet />)

  
}

export default ProtectedRoute
