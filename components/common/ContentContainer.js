import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = styled(motion.div)`
  width:100%;
  max-width: 1024px;
  padding:24px;
  border-radius:6px;
  background: var(--glassbg);
  backdrop-filter: blur(20px);
  transition: background 0.5s ease;
  @media (max-width:1024px) {
    padding:12px;
  } 
  .content-box{
    width:100%;
    padding:24px;
    border-radius:6px;
    background:var(--background);
    min-height:500px;
    transition: background 0.5s ease;
    @media (max-width:1024px) {
      padding:12px;
    } 
  }
`

const ContentContainer = ({children}) => {
  return (
    <Container initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.5,duration:0.5, easing:'easeIn'}}>
      <div className="content-box">
        {children}
      </div>
    </Container>
  )
}

export default ContentContainer
