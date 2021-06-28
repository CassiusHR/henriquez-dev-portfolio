import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from "next/router";
import DarkModeToggler from './DarkModeToggler'
import { hrefResolver } from '../../prismic-configuration'
import LanguageSwitcher from '../LanguageSwitcher'
import Logo from '../../public/logo.svg'
import { motion, AnimatePresence, useTransform, useViewportScroll } from 'framer-motion'

const NavBar = styled.nav`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  width:100%;
  height:60px;
  position:relative;
  position:absolute;
  background: rgba(0,0,0,0);
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
    height:60px;
    button {
      -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
      background:none;
      border:none;
      outline:none;
      width: 80px;
      height: 80px;
      z-index:99;
      position:absolute;
      right:7px;
      display:none;
      @media (max-width:1024px) {
        display:block;
      }
      #icon {
        width: 80px;
        height: 80px;
        cursor: pointer;
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
        -o-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
      path {
        fill: none;
        -webkit-transition: stroke-dashoffset 0.3s cubic-bezier(0.25, -0.25, 0.75, 1.25), stroke-dasharray 0.3s cubic-bezier(0.25, -0.25, 0.75, 1.25);
        -moz-transition: stroke-dashoffset 0.3s cubic-bezier(0.25, -0.25, 0.75, 1.25), stroke-dasharray 0.3s cubic-bezier(0.25, -0.25, 0.75, 1.25);
        -o-transition: stroke-dashoffset 0.3s cubic-bezier(0.25, -0.25, 0.75, 1.25), stroke-dasharray 0.3s cubic-bezier(0.25, -0.25, 0.75, 1.25);
        -ms-transition: stroke-dashoffset 0.3s cubic-bezier(0.25, -0.25, 0.75, 1.25), stroke-dasharray 0.3s cubic-bezier(0.25, -0.25, 0.75, 1.25);
        transition: stroke-dashoffset 0.3s cubic-bezier(0.25, -0.25, 0.75, 1.25), stroke-dasharray 0.3s cubic-bezier(0.25, -0.25, 0.75, 1.25);
        stroke-width: 40px;
        stroke-linecap: round;
        stroke: #fff;
        stroke-dashoffset: 0px;
      }
      path#top,
      path#bottom {
        stroke-dasharray: 240px 950px;
      }
      path#middle {
        stroke-dasharray: 240px 240px;
      }
      .cross path#top,
      .cross path#bottom {
        stroke-dashoffset: -650px;
        stroke-dashoffset: -650px;
      }
      .cross path#middle {
        stroke-dashoffset: -115px;
        stroke-dasharray: 1px 220px;
      }
    }
    .logo{
      position:absolute;
      left:0;
      top:12px;
      left:12px;
      max-width:32px;
      z-index:99;
      cursor:pointer;
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
        font-size:12px;
        border-radius:6px;
        letter-spacing:2.5px;
        position:relative;
        transition:all 0.3s ease;
        border: 1px solid rgba(255,255,255, 0);
        opacity:0.6;
        padding:6px 14px;
        &.selected{
          opacity:1;
          border: 1px solid rgba(255,255,255, 0.1);
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
          font-weight:400;
          color: ${props => props.inhome ? 'var(--text-color)': 'white'};
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
            color:var(--text-color);
            transition:color 0.3s ease;
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
    <NavBar inhome={(`/${currentLang}${router.pathname}`) === (`/${currentLang}/` || '/') ? true : false}>
      <div className="nav-container">
        <Link href={`/${currentLang}`} passHref>
          <Logo className="logo"/>
        </Link>
        <ul className="desk-nav">
          {menuLinks && menuLinks.map((link,i)=>(
            <li key={`menulink-${i}`} className={(`/${currentLang}${router.pathname}`) == hrefResolver(link.link) ? 'selected' : ''}>
              <Link href={hrefResolver(link.link)} scroll={false} passHref>
                <a>{link.label[0].text.toUpperCase()}</a>
              </Link>
            </li>
          ))}
          <LanguageSwitcher altLangs={altLangs} currentLang={currentLang} inhome={(`/${currentLang}${router.pathname}`) === (`/${currentLang}/` || '/') ? true : false}/>
        </ul>
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
              <LanguageSwitcher altLangs={altLangs} currentLang={currentLang} inhome={true} isDesktop={false}/>
              <DarkModeToggler switchTheme={switchTheme} theme={theme} isDesktop={true}/>
            </ul>
          </motion.div>}
        </AnimatePresence>
        <DarkModeToggler switchTheme={switchTheme} theme={theme} isDesktop={false}/>
        <button onClick={()=>setMobileToggle(!mobileToggle)}>
          <svg id="icon" viewBox="0 0 800 600" className={mobileToggle ? 'cross' : ''}>
            <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
            <path d="M300,320 L540,320" id="middle"></path>
            <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
          </svg>
        </button>
      </div>
      
    </NavBar>
  )
}

export default Navbar
