import React from 'react'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs';
import Image from 'next/image'
import NextLogo from '../../public/nextjs.svg'
import ReactLogo from '../../public/React-icon.svg'
import GatsbyLogo from '../../public/gatsby-icon.svg'
import VueLogo from '../../public/vue.svg'
import NuxtLogo from '../../public/nuxt.svg'
import GridsomeLogo from '../../public/gridsome.svg'
import GraphqlLogo from '../../public/graphql.svg'
import JsLogo from '../../public/js-icon.svg'
import NetlifyLogo from '../../public/netlify.svg'
import CloudflareLogo from '../../public/cloudflare.svg'
import VercelLogo from '../../public/vercel.svg'
import PrismicLogo from '../../public/prismic.svg'
import GhostLogo from '../../public/ghost.svg'
import JamstackLogo from '../../public/jamstack.svg'

const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:flex-start;
  margin-bottom:24px;
  height:100%;
  &.right-align{
    justify-content:flex-end;
  }
  &.left-align{
    justify-content:flex-start;
  }
  .pr{
    padding-right:24px;
  }
  .pl{
    padding-left:24px;
  }
  h2 {
    font-size:4rem;
    line-height:4rem;
    background-color: red;
    background-image: linear-gradient(45deg, #f3ec78, #af4261);
    background-size: 100%;
    background-repeat: repeat;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    margin:0;
  }
  p {
    margin-top:0;
  }
  h3{
    font-weight:400;
    font-size:1.5rem;
    margin:0 0 14px 0;
  }
  .stack-container {
    background: #414040;
    border-radius:6px;
    padding:14px;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-between;
    align-items:flex-start;
    svg{
      width:100px;
      margin:6px 0px;
    }
  }
  .container-70 {
    width:70%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    height:100%;
  }
  .container-30 {
    width:30%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    height:100%;
  }
  .desc-top-image {
    width:100%;
    height:100%;
    height:600px;
    position:relative;
    overflow:hidden;
    .overlay{
      position:absolute;
      content:'';
      bottom:0;
      left:0;
      right:0;
      height:500px;
      background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%);
      opacity:0;
      transition:opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
      transform:translateY(10px);
      transition-delay: 0.2s;
      display:flex;
      flex-direction:column;
      justify-content:flex-end;
      align-items:flex-start;
      padding:12px;
      p{
        color:white;
        font-size:14px;
        line-height:14px;
        margin:0 0 5px 0;
      }
      span{
        color:rgba(255,255,255,0.5);
        font-size:12px;
      }
    }
    :hover{
      img{
        transform:scale(1.05);
      }
      .overlay{
        opacity:1;
        transform:translateY(0px);
      }
    }
    img{
      border-radius:6px;
      transition:transform 0.5s ease-in-out;
    }
  }
`

const AboutContent = ({ textData }) => {
  return (
    <>
      <Container className="left-align">
        <h2>The Short</h2>
      </Container>
      <Container>
        <div className="container-70 pr">
          {RichText.render(textData.the_short_desc)}
          <h3>Cool tech that i love and use:</h3>
          <div className="stack-container">
            <JsLogo/>
            <JamstackLogo/>
            <GraphqlLogo/>
            <ReactLogo/>
            <NextLogo/>
            <GatsbyLogo/>
            <VueLogo/>
            <NuxtLogo/>
            <GridsomeLogo/>
            <NetlifyLogo/>
            <CloudflareLogo/>
            <PrismicLogo/>
            <GhostLogo/>
            <VercelLogo/>
          </div>
        </div>
        <div className="container-30">
          <div className="desc-top-image">
            <Image src={textData.feature_top_image_desktop.url} layout="fill"/>
            <div className="overlay">
              <p>Carlos Henriquez</p>
              <span>Front-End Developer / Meme degustator</span>
            </div>
          </div>
        </div>
      </Container>
      <Container className="left-align">
        <h2>The Long</h2>
      </Container>
      <Container>
        <div className="container-30">
          <div className="desc-top-image">
          </div>
        </div>
        <div className="container-70">
        </div>
      </Container>
    </>
  )
}

export default AboutContent
