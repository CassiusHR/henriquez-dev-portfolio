import '../styles/globals.css'
import { useState } from 'react'
import Layout from '../components/Layout'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyles } from "../configs/ThemeConfig" 

function MyApp({ Component, pageProps, router }) {
  const [theme, setTheme] = useState("light") 

  const toggleTheme = () => {
      theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <Layout switchTheme={toggleTheme} theme={theme}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
