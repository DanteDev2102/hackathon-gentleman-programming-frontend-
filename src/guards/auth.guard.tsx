import { useAuth } from '@/hooks'
import { PublicRoutes } from '@/routes'
import { Navigate, Outlet } from 'react-router-dom'

const AuthGuard = () => {
  const user = useAuth()

  if (!user.auth) {
    return <Navigate replace to={PublicRoutes.LOGIN} />
  }
  return <Outlet />
}
export default AuthGuard
