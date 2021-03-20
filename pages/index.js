import Head from 'next/head'
import HeaderSection from '../components/common/HeaderSection'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <Head>
        <title>Carlos Henriquez - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderSection/>
    </motion.div>
  )
}
