import { Footer, Layout, Loader } from '@/components'
import { AuthGuard } from '@/guards'
import { LandingPage } from '@/page'
import { store } from '@/redux'
import { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { PrivateRoutes, PublicRoutes } from './routes/routes'
import RoutesWithNotFound from './utilities/RoutesWithNoFound'

const Login = lazy(() => import('./page/Login/Login'))
const Register = lazy(() => import('./page/Register/Register'))
const JobsList = lazy(() => import('./page/JobsList/JobsList'))
const HomeAuth = lazy(() => import('./page/HomeAuth/HomeAuth'))

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </Provider>
    </BrowserRouter>
  )
}

export default App
