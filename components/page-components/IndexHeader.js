import React from 'react'
import styled from 'styled-components'
import IndexLogo from '../../public/logo-index.svg'
import { motion } from 'framer-motion'

const IndexContainer = styled.section`
  width:100%;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:row;
  position:relative;
  top:0px;
  z-index:0;
  @media (max-width:768px) {
    flex-direction:column;
  }
  .content-box {
    width:100%;
    max-width: 1024px;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    position:relative;
  }
`
const IndexBox = styled.div`
  width:50%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  z-index:100;
  background:var(--background);
  transition:background 0.5s ease;
  overflow:hidden;
  .left-container {
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
  }
  &.limit{
    border-left:1px solid var(--cardBackground2)
  }
  h1 {
    background-color: var(--text);
    font-size:2.2rem;
    @media (max-width:768px) {
      font-size:2rem;
    } 
  }
  &.img-box{
    position:relative;
    width:800px;
    @media (max-width:768px) {
      width:100%;
      padding:0 15px;
    } 
    svg{
      opacity:0.8;
    }
  }
`

const IndexHeader = () => {
  return (
    <IndexContainer>
      <div className="content-box">
        <IndexBox>
          <motion.div className="left-container">
            <IndexLogo/>
          </motion.div>
        </IndexBox>
        <IndexBox className="limit">
          <h1>BREWED IN CHILE<br/>MOVED TO THE STATES<br/>AVAILABLE WORLDWIDE</h1>
        </IndexBox>
      </div>
    </IndexContainer>
  )
}

export default IndexHeader
