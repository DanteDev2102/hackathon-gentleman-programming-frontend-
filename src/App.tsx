import { Footer, Layout } from '@/components'
import { store } from '@/redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Login, Profile, PuestosLaborales, Register, LandingPage, JobsList } from '@/page'
import { PrivateRoutes, PublicRoutes } from './routes/routes'
import { HomeAuth } from './page/HomeAuth'
import { AuthGuard } from '@/guards'
import RoutesWithNotFound from './utilities/RoutesWithNoFound'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Layout>
          <RoutesWithNotFound>
            <Route path={PublicRoutes.LANDING} element={<LandingPage />} />
            <Route path={PublicRoutes.REGISTER} element={<Register />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />

            <Route element={<AuthGuard />}>
              <Route path={PrivateRoutes.HOME_AUTH} element={<HomeAuth />} />
              <Route path={PrivateRoutes.JOBS} element={<JobsList />} />
            </Route>
          </RoutesWithNotFound>
        </Layout>
        <Footer />
      </Provider>
    </BrowserRouter>
  )
}

export default App
