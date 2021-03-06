import '../styles/globals.css'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from "styled-components"
import dynamic from 'next/dynamic'
import { lightTheme, darkTheme, GlobalStyles } from "../configs/ThemeConfig"
import "../configs/nprogress.css";
import GlobalContextProvider from '../context/GlobalContext'

const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressBar");
  },
  { ssr: false },
);

function MyApp({ Component, pageProps, router }) {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
      theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalContextProvider>
        <GlobalStyles/>
          <TopProgressBar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} switchTheme={toggleTheme} theme={theme} key={router.route} routeString={router.route} />
          </AnimatePresence>
        </GlobalContextProvider>
      </ThemeProvider>
  )
}

export default MyApp
