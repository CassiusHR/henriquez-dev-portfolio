import React from 'react'
import styled from 'styled-components'
import Completito from '../../public/vector_comp.svg'
import Hamburguesita from '../../public/vector_hamb.svg'
import { motion } from 'framer-motion'

const IndexContainer = styled.section`
  width:100%;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:row;
  position:fixed;
  top:0px;
  z-index:-1;
  @media (max-width:768px) {
    flex-direction:column;
  }
`
const IndexBox = styled(motion.div)`
  width:50%;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  flex-direction:column;
  
  h1 {
    background-color: red;
    background-image: linear-gradient(45deg, #f3ec78, #af4261);
    background-size: 100%;
    background-repeat: repeat;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    font-size:4rem;
    @media (max-width:768px) {
      font-size:2rem;
    } 
  }
  &.img-box{
    position:relative;
    width:800px;
    svg{
      opacity:0.8;
    }
    .completito{
      position:absolute;
      top: 19px;
      right: 152px;
      z-index:-1;
      animation-name: hover-anim;
      animation-delay: 0;
      animation-iteration-count: infinite;
      animation-direction: forward;
      animation-duration:8s;
      animation-timing-function: ease-in-out;
    }
    .hamburguesita{
      position:absolute;
      top: 109px;
      right: -6px;
      z-index:-1;
      animation-name: hover-anim2;
      animation-delay: 0;
      animation-iteration-count: infinite;
      animation-direction: forward;
      animation-duration:9s;
      animation-timing-function: ease-in-out;
    }
  }
  @keyframes hover-anim {
    0% {
        transform:translateY(30px) rotate(0deg);
    }
    50% {
        transform:translateY(50px) rotate(25deg);
    }
    100% {
        transform:translateY(30px) rotate(0deg);
    }
  }
  @keyframes hover-anim2 {
    0% {
        transform:translateY(30px) rotate(0deg);
    }
    50% {
        transform:translateY(50px) rotate(-25deg);
    }
    100% {
        transform:translateY(30px) rotate(0deg);
    }
  }
`

const IndexHeader = () => {
  return (
    <IndexContainer>
      <IndexBox>

      </IndexBox>
      <IndexBox className="img-box" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{ delay: 0.3 }}>
        <h1>BREWED IN CHILE<br/>MOVED TO THE STATES<br/>AVAILABLE WORLDWIDE</h1>
        <Completito className="completito" width="60px"/>
        <Hamburguesita className="hamburguesita" width="60px"/>
      </IndexBox>
    </IndexContainer>
  )
}

export default IndexHeader
