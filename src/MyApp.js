import { Provider } from 'react-redux'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Navbar from './components/Navbar'

import store from './store'

const MyApp = () => {
  return (
    <Provider store={store}>
      <>
        <Navbar />
        <Header />
        <Main />
        <Footer />
      </>
    </Provider>
  )
}

export default MyApp