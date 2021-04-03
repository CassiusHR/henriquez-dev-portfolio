import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from "next/router";
import DarkModeToggler from './DarkModeToggler'
import { hrefResolver } from '../../prismic-configuration'
import LanguageSwitcher from '../LanguageSwitcher'
import Logo from '../../public/logo.svg'
import { motion, AnimatePresence } from 'framer-motion'

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
  .nav-container{
    width:100%;
    max-width:1024px;
    position:relative;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    .logo{
      position:absolute;
      left:0;
      top:10px;
      max-width:40px;
    }
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
      &.desk-nav {
        @media (max-width:1024px) {
          display:none;
        }
      }
      li{
        margin:0 10px;
        font-size:14px;
        letter-spacing:2px;
        position:relative;
        transition:opacity 0.3s ease;
        &.selected{
          opacity:0.5;
        }
        a{
          z-index:10;
          -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
          background-color: unset;
          background-image: unset;
          background-size: unset;
          background-repeat: unset;
          background-clip: unset;
          -webkit-background-clip: unset;
          -webkit-text-fill-color: unset; 
          -moz-background-clip: unset;
          -moz-text-fill-color: unset;
          font-weight:700;
          color: var(--text-color);
          transition:color 0.3s ease;
        }
      }
    }
    .mobile-nav {
      position:fixed;
      top:0;
      left:0;
      height:100vh;
      width:100vw;
      background: var(--glassbg);
      backdrop-filter: blur(20px);
      ul{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        li{
          margin:10px 0px;
          a{
            font-size:3rem;
          }
        }
      }
    }
  }
  
`

const Navbar = ({ theme, switchTheme, menuLinks, altLangs, currentLang }) => {
  const [ mobileToggle, setMobileToggle ] = useState(false)
  const router = useRouter();

  const closeMenu = () => {
    setMobileToggle(false)
  }

  return (
    <NavBar>
      <div className="nav-container">
        <Logo className="logo"/>
        <ul className="desk-nav">
          {menuLinks && menuLinks.map((link,i)=>(
            <li key={`menulink-${i}`} className={(`/${currentLang}${router.pathname}`) == hrefResolver(link.link) ? 'selected' : ''}>
              <Link href={hrefResolver(link.link)} scroll={false} passHref>
                <a>{link.label[0].text}</a>
              </Link>
            </li>
          ))}
          <LanguageSwitcher altLangs={altLangs} currentLang={currentLang} />
        </ul>
        <button onClick={()=>setMobileToggle(!mobileToggle)}>Test</button>
        <AnimatePresence exitBeforeEnter>
          {mobileToggle && <motion.div key="mobile-nav" className="mobile-nav" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <ul>
              {menuLinks && menuLinks.map((link,i)=>(
                <li key={`menulink-${i}`} className={(`/${currentLang}${router.pathname}`) == hrefResolver(link.link) ? 'selected' : ''}>
                  <Link href={hrefResolver(link.link)} scroll={false} passHref>
                    <div>
                      <a onClick={() => {closeMenu()}}>{link.label[0].text}</a>
                    </div>
                  </Link>
                </li>
              ))}
              <LanguageSwitcher altLangs={altLangs} currentLang={currentLang} />
            </ul>
          </motion.div>}
        </AnimatePresence>
      </div>
      <DarkModeToggler switchTheme={switchTheme} theme={theme}/>
    </NavBar>
  )
}

export default Navbar
