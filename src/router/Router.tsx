import HomeAuth from '@/page/HomeAuth/HomeAuth'
import { PublicRoutes, PrivateRoutes } from '@/routes'
import { Route, Routes } from 'react-router'
import { Home } from '../page/Home'
import { Login } from '../page/Login'
import { Profile } from '../page/Profile'
import { PuestosLaborales } from '../page/PuestosLaborales'
import { Register } from '../page/Register'

export interface RouterInterface {}

const Router: React.FC<RouterInterface> = () => {
  return (
    <Routes>
      <Route path={PublicRoutes.HOME} element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />

      <Route path={PrivateRoutes.HOME_AUTH} element={<HomeAuth />} />
      <Route path={PrivateRoutes.JOBS} element={<PuestosLaborales />} />
      <Route path={PrivateRoutes.PROFILE} element={<Profile />} />
    </Routes>
  )
}

export default Router
