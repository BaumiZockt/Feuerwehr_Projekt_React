import '../styles/index.css'
import { FireProvider } from '../context/FireContext'
import Layout from '../components/LAyout'

function MyApp({ Component, pageProps }) {
  return (
    <FireProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FireProvider>
  )
}

export default MyApp
