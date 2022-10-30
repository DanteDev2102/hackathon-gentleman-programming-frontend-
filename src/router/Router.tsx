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
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/puestoslaborales' element={<PuestosLaborales />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  )
}

export default Router
