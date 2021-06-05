import React from 'react'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs';
import Image from 'next/image'
import AboutTechStack from './AboutTechStack'


const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:flex-start;
  margin-bottom:24px;
  height:100%;
  @media (max-width:1024px) {
    flex-direction:column;
  } 
  &.right-align{
    justify-content:flex-end;
  }
  &.left-align{
    justify-content:flex-start;
  }
  .pr{
    padding-right:24px;
    @media (max-width:1024px) {
      padding-right:0px;
    } 
  }
  .pl{
    padding-left:24px;
    @media (max-width:1024px) {
      padding-right:0px;
    } 
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
    @media (max-width:1024px) {
      font-size:2rem;
      line-height:2rem;
      margin-top:12px;
    } 
  }
  p {
    margin-top:0;
  }
  h3{
    font-weight:400;
    font-size:1.6rem;
    margin:14px 0 14px 0;
    @media (max-width:1024px) {
      font-size:1.2rem;
    } 
  }
  .container-70 {
    width:70%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    height:100%;
    @media (max-width:1024px) {
      width:100%;
    } 
  }
  .container-30 {
    width:30%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    height:100%;
    @media (max-width:1024px) {
      width:100%;
      &.sec-img{
        order:-1;
        margin-bottom:12px;
      }
    }
  }
  .desc-top-image {
    width:100%;
    height:100%;
    height:600px;
    position:relative;
    overflow:hidden;
    border-radius:6px;
    @media (max-width:1024px) {
      height:170px;
    }
    .img-desktop{
      border-radius:6px;
      @media (max-width:1024px) {
        display:none;
      }
    }
    .img-mobile{
      border-radius:6px;
      display:none;
      @media (max-width:1024px) {
        display:block;
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
        <h2>{textData.the_short[0].text}</h2>
      </Container>
      <Container>
        <div className="container-70 pr">
          {RichText.render(textData.the_short_desc)}
          <h3>{textData.cool_tech_text[0].text}</h3>
          <AboutTechStack textData={textData}/>
        </div>
        <div className="container-30 sec-img">
          <div className="desc-top-image">
            <div className="img-desktop">
              <Image src={textData.feature_top_image_desktop.url} layout="fill" objectFit='cover' quality={100}/>
            </div>
            <div className="img-mobile">
              <Image src={textData.feature_top_image_mobile.url} layout="fill" objectFit='cover' className="img-mobile" quality={100}/>
            </div>
          </div>
        </div>
      </Container>
      <Container className="left-align">
        <h2>{textData.the_long[0].text}</h2>
      </Container>
      <Container>
        {RichText.render(textData.the_long_description)}
      </Container>
    </>
  )
}

export default AboutContent
