import React from 'react'
import styled from 'styled-components'

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
const IndexBox = styled.div`
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
    font-size:5rem;
    @media (max-width:768px) {
      font-size:2rem;
    }
  }
`

const IndexHeader = () => {
  return (
    <IndexContainer>
      <IndexBox></IndexBox>
      <IndexBox>
        <h1>BREWED IN CHILE<br/>MOVED TO THE STATES<br/>AVAILABLE WORLDWIDE</h1>
      </IndexBox>
    </IndexContainer>
  )
}

export default IndexHeader
