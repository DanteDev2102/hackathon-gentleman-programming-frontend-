import { store } from '@/redux'
import { Provider } from 'react-redux'
import Router from './router/Router'
import { Layout, Footer } from '@/components'
import { Navbar } from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <Navbar />
          <Router />
        </Layout>
        <Footer />
      </Provider>
    </BrowserRouter>
  )
}

export default App
