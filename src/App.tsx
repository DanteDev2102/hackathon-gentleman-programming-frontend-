import { store } from '@/redux'
import { Provider } from 'react-redux'
import Router from './router/Router'
import { Header, Layout } from '@/components'
import { Navbar } from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Navbar />
        <Provider store={store}>
          <Router />
        </Provider>
      </Layout>
    </BrowserRouter>
  )
}

export default App
