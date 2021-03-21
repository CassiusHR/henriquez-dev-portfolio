import React from 'react'
import styled from 'styled-components'

const IndexContainer = styled.section`
  width:100%;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:row;
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
}
`

const IndexHeader = () => {
  return (
    <IndexContainer>
      <h1>BREWED IN CHILE, MOVED TO THE STATES, AVAILABLE WORLDWIDE</h1>
    </IndexContainer>
  )
}

export default IndexHeader
