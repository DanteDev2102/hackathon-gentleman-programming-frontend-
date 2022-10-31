import { useAuth } from '@/hooks'
import { PublicRoutes } from '@/routes'
import { Navigate, Outlet } from 'react-router-dom'

const AuthGuard = () => {
  const user = useAuth()

  if (user.auth) {
    return <Outlet />
  } else {
    return <Navigate replace to={PublicRoutes.LOGIN} />
  }
}
export default AuthGuard
