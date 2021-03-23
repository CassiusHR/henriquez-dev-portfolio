import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ProgressiveImage from "react-progressive-image-loading"

const HeaderContainer = styled.section`
  width:100%;
  height:100vh;
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:flex-start;
`
const FeatureImageContainer = styled.div`
  width:100%;
  height:600px;
  overflow:hidden;
  position:relative;
  :after{
    position:absolute;
    content:'';
    top:0;
    left:0;
    bottom:0;
    right:0;
    background:rgba(0,0,0,0.5);
    z-index:10;
  }
  .feature-image {
    width:100%;
    height:100%;
    overflow:hidden;
    background-position:center;
    background-origin:center;
    background-size:cover;
  }
  .feature-text{
    position:absolute;
    left:100px;
    top:50%;
    z-index:99;
    h1{
      color:white;
      font-size:5rem;
      margin:0;
      position:relative;
      overflow:hidden;
      animation: text-anim 1s cubic-bezier(.77,0,.18,1) forwards;
      :after{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: white;
        animation: a-ltr-after 1s cubic-bezier(.77,0,.18,1) forwards;
        transform: translateX(-101%);
      }
    }
  }
  .feature-desc{
    position:absolute;
    left:100px;
    top:65%;
    z-index:99;
    p{
      color:rgba(250,250,250,0.6);
      position:relative;
      overflow:hidden;
      animation: text-anim 1.5s cubic-bezier(.77,0,.18,1) forwards;
      :after{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: white;
        animation: a-ltr-after 1.5s cubic-bezier(.77,0,.18,1) forwards;
        transform: translateX(-101%);
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

const Box = styled.div`
  width:200px;
  border: 1px solid var(--outline);
  border-radius:6px;
  background: var(--background);
  padding:20px;
  transition: all 0.3s ease;
  transition-delay:0.3s;
`

const HeaderSection = ({ fullImg, previewImg, headerText, headerDescription }) => {
  return (
    <HeaderContainer>
      <FeatureImageContainer>
        <ProgressiveImage
            preview={previewImg}
            src={fullImg}
            render={(src, style) => <div className='feature-image' style={Object.assign(style, { backgroundImage: `url(${src})`})} />}
            transitionTime={500}
            transitionFunction="ease"
        />
        <div className="feature-text"><h1>{headerText}</h1></div>
        <div className="feature-desc"><p>{headerDescription}</p></div>
      </FeatureImageContainer>
      <Box>Hola</Box>
    </HeaderContainer>
  )
}

export default HeaderSection
