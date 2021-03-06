import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'

const HeaderContainer = styled.section`
  width:100%;
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:flex-start;
  z-index:0;
`
const FeatureImageContainer = styled(motion.div)`
  width:100%;
  height:600px;
  overflow:hidden;
  position:relative;
  @media (max-width:1024px) {
    height:430px;
  } 
  :after{
    position:absolute;
    content:'';
    top:0;
    left:0;
    bottom:0;
    right:0;
    background:rgba(0,0,0,0.6);
    z-index:0;
  }
  .feature-image {
    width:100%;
    height:100%;
    overflow:hidden;
    background-position:center;
    background-origin:center;
    background-size:cover;
  }
  .text-container {
    position:relative;
    z-index:1;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:center;
    height:100%;
    transform:translateY(-150px);
    @media (max-width:1024px) {
      padding-left:24px;
      padding-right:24px;
    } 
    .feature-text{
      max-width:1024px;
      width:100%;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:flex-start;
      z-index:11;
      h1{
        display:inline-block;
        background-color: red;
        background-image: linear-gradient(45deg, #f3ec78, #af4261);
        background-size: 100%;
        background-repeat: repeat;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        font-size:6rem;
        line-height:6rem;
        margin:0;
        position:relative;
        overflow:hidden;
        font-weight:700;
        @media (max-width:1024px) {
          font-size:3rem;
          line-height:3rem;
        } 
        animation: text-anim 1s cubic-bezier(.77,0,.18,1) forwards;
        animation-delay:0.5s;
        :after{
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #f3ec78, #af4261);
          animation: a-ltr-after 1s cubic-bezier(.77,0,.18,1) forwards;
          animation-delay:0.5s;
          transform: translateX(-101%);
        }
      }
    }
    .feature-desc{
      max-width:1024px;
      width:100%;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:flex-start;
      p{
      display:inline-block;
        color:rgba(250,250,250,1);
        position:relative;
        overflow:hidden;
        font-size:24px;
        font-weight:200;
        animation: text-anim 1.5s cubic-bezier(.77,0,.18,1) forwards;
        margin:0;
        @media (max-width:1024px) {
          font-size:1.2rem;
          line-height:1.2rem;
          margin-top:12px;
        } 
        :after{
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background: white;
          animation: a-ltr-after 1.5s cubic-bezier(.77,0,.18,1) forwards;
          animation-delay:0.5s;
          transform: translateX(-101%);
        }
      }
    }
  }
  @keyframes a-ltr-after{
    0% {transform: translateX(-100%)}
    100% {transform: translateX(101%)}
  }
  @keyframes text-anim{
    0% {-webkit-clip-path: inset(0 100% 0 0);
        clip-path: inset(0 100% 0 0);}
    100% {-webkit-clip-path: inset(0);
        clip-path: inset(0);}
  }
  @keyframes text-movement{
    0% {transform: translateX(-20%)}
    100% {transform: translateX(0%)}
  }
`

const HeaderSection = ({ fullImg, previewImg, headerText, headerDescription }) => {

  return (
    <HeaderContainer>
      <FeatureImageContainer initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5,duration:1, easing:'easeIn'}}>
        <Image src={fullImg} priority={true} layout='fill' objectFit='cover' className="feature-image" quality={100}/>
        <div className="text-container">
          <div className="feature-text"><h1>{headerText}</h1></div>
          <div className="feature-desc"><p>{headerDescription}</p></div>
        </div>
      </FeatureImageContainer>
    </HeaderContainer>
  )
}

export default HeaderSection
