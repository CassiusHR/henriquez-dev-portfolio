import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.section`
  width:100%;
  height:100vh;
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:center;
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

const HeaderSection = () => {
  return (
    <HeaderContainer>
      <Box>Hola</Box>
    </HeaderContainer>
  )
}

export default HeaderSection
