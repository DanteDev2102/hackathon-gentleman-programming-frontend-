import { Footer, Layout } from '@/components'
import { store } from '@/redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home, Login, Profile, PuestosLaborales, Register } from '@/page'
import { PrivateRoutes, PublicRoutes } from './routes/routes'
import { HomeAuth } from './page/HomeAuth'
import { AuthGuard } from '@/guards'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Layout>
          <Routes>
            <Route path={PublicRoutes.HOME} element={<Home />} />
            <Route path={PublicRoutes.REGISTER} element={<Register />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />

            <Route element={<AuthGuard />}>
              <Route path={PrivateRoutes.HOME_AUTH} element={<HomeAuth />} />
              <Route path={PrivateRoutes.JOBS} element={<PuestosLaborales />} />
              <Route path={PrivateRoutes.PROFILE} element={<Profile />} />
            </Route>
          </Routes>
        </Layout>
        <Footer />
      </Provider>
    </BrowserRouter>
  )
}

export default App
