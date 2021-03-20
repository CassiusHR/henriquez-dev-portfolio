import React from 'react'
import styled from 'styled-components'

const NavBar = styled.nav`
  display:flex;
  width:100%;
  height:60px;
`

const Navbar = () => {
  return (
    <NavBar>
      <ul>
        <li>
          Home
        </li>
        <li>
          About
        </li>
      </ul>
    </NavBar>
  )
}

export default Navbar
