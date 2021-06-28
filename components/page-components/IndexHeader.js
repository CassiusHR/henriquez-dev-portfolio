import React from 'react'
import styled from 'styled-components'
import IndexLogo from '../../public/logo-index.svg'
import { motion } from 'framer-motion'
import Linkedin from '../../public/linkedin.svg'
import Instagram from '../../public/instagram.svg'
import Github from '../../public/github.svg'

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
    :after{
      content:'';
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:60px;
      background:var(--background);
      transition:background 0.5s ease;
      z-index:100;
      border-bottom:1px solid var(--cardBackground2);
    }
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
  .left-content {
    animation-name: slide-left;
    animation-timing-function: cubic-bezier(0.85, 0, 0.15, 1);
    animation-duration: 3s;
    animation-delay:0.2s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    transform:translateX(100%);
  }
  .right-content {
    animation-name: slide-right;
    animation-timing-function: cubic-bezier(0.85, 0, 0.15, 1);
    animation-duration: 3s;
    animation-delay:0.2s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    transform:translateX(-130%);
  }
  &.limit{
    border-left:1px solid var(--cardBackground2);
    align-items:flex-start;
    padding-left:24px;
    .links-container{
      display:flex;
      flex-direction: row;
      justify-content:flex-start;
      align-items: center;
      width:100%;
      .icon{
        width:30px;
        height:30px;
        border:1px solid var(--cardBackground2);
        border-radius:50%;
        padding:8px;
        display:flex;
        flex-direction: row;
        justify-content:center;
        align-items: center;
        margin-right:4px;
        animation-name: slide-icon;
        animation-timing-function: cubic-bezier(0.85, 0, 0.15, 1);
        animation-duration: 1s;
        animation-delay:2.8s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        transform:translateX(20%);
        opacity:0;
        &.icon-2{
          animation-delay:3s;
        }
        &.icon-3{
          animation-delay:3.2s;
        }
      }
    }
  }
  h1 {
    background-color: var(--text);
    font-weight:400;
    font-size:2.2rem;
    @media (max-width:768px) {
      font-size:1rem;
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
  @keyframes slide-left {
    0% {
      transform:translateX(100%);
    }
    100% {
      transform:translateX(0%);
    }
  }
  @keyframes slide-right {
    0% {
      transform:translateX(-130%);
    }
    100% {
      transform:translateX(0%);
    }
  }
  @keyframes slide-icon {
    0% {
      transform:translateX(20%);
      opacity:0;
    }
    100% {
      transform:translateX(0%);
      opacity:1;
    }
  }
`

const IndexHeader = () => {
  return (
    <IndexContainer>
      <div className="content-box">
        <IndexBox>
          <motion.div className="left-container">
            <IndexLogo className="left-content"/>
          </motion.div>
        </IndexBox>
        <IndexBox className="limit">
          <h1 className="right-content">BREWED IN CHILE<br/>MOVED TO THE STATES<br/>AVAILABLE WORLDWIDE</h1>
          <div className="links-container">
            <div className="icon">
              <Linkedin/>
            </div>
            <div className="icon icon-2">
              <Instagram/>
            </div>
            <div className="icon icon-3">
              <Github/>
            </div>
          </div>
        </IndexBox>
      </div>
    </IndexContainer>
  )
}

export default IndexHeader
