import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from "next/router";
import DarkModeToggler from './DarkModeToggler'
import { motion, AnimateSharedLayout } from 'framer-motion'

const NavBar = styled.nav`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  width:100%;
  height:60px;
  position:relative;
  position:fixed;
  top:0;
  left:0;
  z-index:99;
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
      position:relative;
      a{
        z-index:10;
        -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
      }
      .selected{
        content:'';
        position:absolute;
        width:150%;
        bottom:-5px;
        left:-25%;
        height:50px;
        border-radius:0px 0px 6px 6px;
        background:var(--navSelected);
        transition:background 0.3s ease;
        z-index:-1;
      }
    }
  }
`

const Navbar = ({ theme, switchTheme }) => {
  const router = useRouter();

  return (
    <NavBar>
      <AnimateSharedLayout>
        <ul>
          <li key="homelink">
            <Link href="/">
              <a>Home</a>
            </Link>
            {router.pathname == "/" ? <motion.div layoutId="selectedbox" className="selected"></motion.div>:null}
          </li>
          <li key="aboutlink">
            <Link href="/about">
              <a>About</a>
            </Link>
            {router.pathname == "/about" ? <motion.div layoutId="selectedbox" className="selected"></motion.div>:null}
          </li>
          <li key="worklink">
            <Link href="/work">
              <a>Work</a>
            </Link>
            {router.pathname == "/work" ? <motion.div layoutId="selectedbox" className="selected"></motion.div>:null}
          </li>
          <li key="bloglink">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
            {router.pathname == "/blog" ? <motion.div layoutId="selectedbox" className="selected"></motion.div>:null}
          </li>
        </ul>
      </AnimateSharedLayout>
      <DarkModeToggler switchTheme={switchTheme} theme={theme}/>
    </NavBar>
  )
}

export default Navbar
