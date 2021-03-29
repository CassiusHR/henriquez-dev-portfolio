import React from 'react'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs';

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
    background:black;
    width:100%;
    height:100%;
    border-radius:6px;
    height:600px;
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
        </div>
        <div className="container-30">
          <div className="desc-top-image">
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
