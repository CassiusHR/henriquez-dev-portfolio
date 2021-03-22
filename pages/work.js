import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

const work = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <Head>
        <title>Carlos Henriquez - Work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Work</h1>
    </motion.div>
  )
}

export default work
