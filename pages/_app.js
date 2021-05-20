import '../styles/index.css'
import { FireProvider } from '../context/FireContext'
import Layout from '../components/LAyout'
import {BrowserRouter as Switch, Router, Route } from 'react-router-dom'

function MyApp({ Component, pageProps }) {
  return (
    <FireProvider>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </FireProvider>
  )
}

export default MyApp
