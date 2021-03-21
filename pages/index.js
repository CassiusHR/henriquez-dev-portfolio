import Head from 'next/head'
import IndexHeader from '../components/page-components/IndexHeader'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <Head>
        <title>Carlos Henriquez - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IndexHeader/>
    </motion.div>
  )
}
