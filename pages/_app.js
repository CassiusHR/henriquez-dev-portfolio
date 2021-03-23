import '../styles/globals.css'
import { useState } from 'react'
import Layout from '../components/Layout'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from "styled-components"
import dynamic from 'next/dynamic'
import { lightTheme, darkTheme, GlobalStyles } from "../configs/ThemeConfig"
import "../configs/nprogress.css";

const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressBar");
  },
  { ssr: false },
);

function MyApp({ Component, pageProps, router }) {
  const [theme, setTheme] = useState("light") 

  const toggleTheme = () => {
      theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <Layout switchTheme={toggleTheme} theme={theme}>
        <TopProgressBar />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
