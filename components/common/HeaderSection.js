import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import LazyImage from 'react-lazy-blur-image';

const HeaderContainer = styled.section`
  width:100%;
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
    background:rgba(0,0,0,0.6);
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
    top:46%;
    z-index:99;
    h1{
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
      margin:0;
      position:relative;
      overflow:hidden;
      font-weight:700;
      animation: text-anim 1s cubic-bezier(.77,0,.18,1) forwards;
      :after{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #f3ec78, #af4261);
        animation: a-ltr-after 1s cubic-bezier(.77,0,.18,1) forwards;
        transform: translateX(-101%);
      }
    }
  }
  .feature-desc{
    position:absolute;
    left:100px;
    top:62%;
    z-index:99;
    p{
      color:rgba(250,250,250,1);
      position:relative;
      overflow:hidden;
      font-size:24px;
      font-weight:200;
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
const Image = styled.img`
  height: 100%;
  width: 100%;
  display: block;
  object-fit: cover;
`;

const HeaderSection = ({ fullImg, previewImg, headerText, headerDescription }) => {
  return (
    <HeaderContainer>
      <FeatureImageContainer>
        <LazyImage
          uri={fullImg}
          placeholder={previewImg}
          render={(src, style) => <Image src={src} style={style} />}
        />
        <div className="feature-text"><h1>{headerText}</h1></div>
        <div className="feature-desc"><p>{headerDescription}</p></div>
      </FeatureImageContainer>
    </HeaderContainer>
  )
}

export default HeaderSection
