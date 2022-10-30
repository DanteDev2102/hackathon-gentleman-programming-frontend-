import { Footer, Layout } from '@/components'
import { store } from '@/redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import Router from './router/Router'

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
