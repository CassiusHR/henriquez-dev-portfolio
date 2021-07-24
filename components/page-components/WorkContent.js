import React from 'react'
import styled from 'styled-components'

const PasswordInput = styled.input`
  background:transparent;
  border:1px solid white;
  outline:none;
  border-radius:6px;
  padding:16px;
`
const Container = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const WorkContent = () => {
  return (
    <Container>
      <p>Currently working in a cool way to display work case studies.</p>
    </Container>
  )
}

export default WorkContent
