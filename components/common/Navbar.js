import React, { useContext } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from "next/router";
import DarkModeToggler from './DarkModeToggler'
import { hrefResolver } from '../../prismic-configuration'
import LanguageSwitcher from '../LanguageSwitcher'
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
  z-index:10;
  ul{
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    list-style-type:none;
    padding:0px;
    height:100%;
    border-radius: 0px 0px 6px 6px;
    padding: 0px 15px;
    transition: background 0.5s ease;
    li{
      margin:0 10px;
      font-size:14px;
      letter-spacing:2px;
      position:relative;
      &.selected{
        color:red;
      }
      a{
        z-index:10;
        -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
      }
    }
  }
`

const Navbar = ({ theme, switchTheme, menuLinks, altLangs, currentLang }) => {
  const router = useRouter();
  return (
    <NavBar>
      <ul>
        {menuLinks && menuLinks.map((link,i)=>(
          <li key={`menulink-${i}`} className={(`/${currentLang}${router.pathname}`) == hrefResolver(link.link) ? 'selected' : ''}>
            <Link href={hrefResolver(link.link)} scroll={false} passHref>
              <a>{link.label[0].text}</a>
            </Link>
          </li>
        ))}
        <LanguageSwitcher altLangs={altLangs} />
      </ul>
      <DarkModeToggler switchTheme={switchTheme} theme={theme}/>
    </NavBar>
  )
}

export default Navbar
