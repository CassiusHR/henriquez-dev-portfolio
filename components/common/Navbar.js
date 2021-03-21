import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const NavBar = styled.nav`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  width:100%;
  height:60px;
  ul{
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    list-style-type:none;
    padding:0px;
    li{
      margin:0 10px;
    }
  }
`

const Navbar = () => {
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
    </NavBar>
  )
}

export default Navbar
