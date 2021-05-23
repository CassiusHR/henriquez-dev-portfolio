import React from 'react'
import styled from 'styled-components'

const PasswordInput = styled.input`
  background:transparent;
  border:1px solid white;
  outline:none;
  border-radius:6px;
  padding:16px;
`

const WorkContent = () => {
  return (
    <div>
      <PasswordInput placeholder="Password"/>
    </div>
  )
}

export default WorkContent
