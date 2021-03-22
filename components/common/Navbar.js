import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import DarkModeToggler from './DarkModeToggler'

const NavBar = styled.nav`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  width:100%;
  height:60px;
  position:relative;
  ul{
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    list-style-type:none;
    padding:0px;
    li{
      margin:0 10px;
      font-size:14px;
      letter-spacing:2px;
    }
  }
`

const Navbar = ({ theme, switchTheme }) => {
  return (
    <NavBar>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
      <DarkModeToggler switchTheme={switchTheme} theme={theme}/>
    </NavBar>
  )
}

export default Navbar
