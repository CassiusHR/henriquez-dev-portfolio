import React, { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const DarkModeContainer = styled.div`
  display:flex;
  position:relative;
  p{
    color:white;
    position:absolute;
    right:-35px;
    top:20px;
    font-size:12px;
    line-height:12px;
  }
  @media (max-width:768px) {
    display:${props => props.isDesktop ? 'none' : 'flex'}
  }
`

const SwitchContainer = styled.div`
  transform:scale(0.5)translateX(9px);
    label {
      cursor: pointer;
      padding: 1rem;
      position: relative;
      -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
      z-index:10;
      
      input[type="checkbox"] {
          height: 0;
          width: 0;
          visibility: hidden;
          position: absolute;
      }
      
      .planet {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        overflow: hidden;
        background:
          radial-gradient(3.75em, 99%, transparent 100%);
        background-color: var(--bg-planet-bright);
        background-repeat: no-repeat;
        position: relative;
        will-change: background;
        transition: all 400ms ease;
        backface-visibility: hidden;
        transform: translate3d(0, 0, 0);
        
        &::after {
          content: "";
          background-color: var(--bg-planet-shadow);
          width: 2rem;
          height: 2rem;
          position: absolute;
          border-radius: 50%;
          will-change: opacity, transform, background-color;
          opacity: 0;
          transform: translate(2em, -2em);
          transition: opacity 400ms ease, transform 400ms ease, background-color 400ms ease;
        }
      }

      .elements {
        width: 64px;
        height: 64px;
        position: absolute;
        top: 22px;
        left: -16px;
        transition: transform 400ms ease;

        svg {
          position: absolute;
          width: 7px;
          height: 7px;
          opacity: 1;
          transition: transform 400ms ease, opacity 200ms ease, width 200ms ease, height 200ms ease;
          circle {
            fill: var(--bg-planet-bright);
            transition: fill 400ms ease;
          }
          &:first-child {
            transform: translate(1.8em, 0.35em);
          }
          &:nth-child(2) {
            transform: translate(2.8em, 0.7em);
          }
          &:nth-child(3) {
            transform: translate(3.2em, 1.8em);
          }
          &:nth-child(4) {
            transform: translate(2.8em, 2.8em);
          }
          &:nth-child(5) {
            transform: translate(1.8em, 3.2em);
          }
          &:nth-child(6) {
            transform: translate(0.7em, 2.8em);
          }
          &:nth-child(7) {
            transform: translate(0.35em, 1.8em);
          }
          &:nth-child(8) {
            transform: translate(0.7em, 0.7em);
          }
        }
      }
    }
      
  label {
    input:checked {
      &+.planet {
        --bg-planet-bright: #D7D7D8;

        &::after {
          opacity: 1;
          transform: translate(0.6em, -0.5em);
        }
      }

      &~.elements {
        transform: rotate(180deg);

        svg {
          &:first-child {
            transform: translate(2em, 1em);
            opacity: 0;
          }
          &:nth-child(2) {
            transform: translate(3em, 1.5em);
            opacity: 0;
          }
          &:nth-child(3) {
            transform: translate(3em, 2em);
            opacity: 0;
          }
          &:nth-child(4) {
            transform: translate(3em, 2em);
            opacity: 0;
          }
          &:nth-child(5) {
            transform: translate(1.9em, 2.6em);
            width: 0.3em;
            height: 0.3em;
            opacity: 0;
            circle {
              fill: var(--bg-planet-lightshadow);
            }
          }
          &:nth-child(6) {
            transform: translate(1.4em, 2.5em);
            width: 0.3em;
            height: 0.3em;
            opacity: 0;
            circle {
              fill: var(--bg-planet-lightshadow);
            }
          }
          &:nth-child(7) {
            transform: translate(1.1em, 1.6em);
            width: 0.7em;
            height: 0.7em;
            opacity: 0;
            circle {
              fill: var(--bg-planet-lightshadow);
            }
          }
          &:nth-child(8) {
            width: 0.45em;
            height: 0.45em;
            transform: translate(1.7em, 2.1em);
            opacity: 0;
            circle {
              fill: var(--bg-planet-lightshadow);
            }
          }
        }
      }
    }
  }
`

const DarkModeToggler = ({ theme, switchTheme, isDesktop }) => {
  const [langLoading, setLangLoading] = useState(false)

  const handleLoading = () => {
    setLangLoading(true)
    switchTheme()
    setTimeout(()=>{
      setLangLoading(false)
    },1000)
  }
  
  return (
    <DarkModeContainer isDesktop={isDesktop}>
      <AnimatePresence exitBeforeEnter initial={false}>
      {langLoading ? <motion.p initial={{opacity:0,x:5}} animate={{opacity:0.6,x:0}} exit={{opacity:0,x:5}}  key='light-text'>{theme === 'light' ? 'Light' : 'Dark'}</motion.p> : ''}
      </AnimatePresence>
      <SwitchContainer>
        <label>
          <input type="checkbox" onChange={handleLoading} defaultChecked={true}/>
          <div className="planet">
          </div>
          <div className="elements">
            <svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <circle cx="250" cy="250" r="200" />
            </svg>
            <svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <circle cx="250" cy="250" r="200" />
            </svg>
            <svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <circle cx="250" cy="250" r="200" />
            </svg>
            <svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <circle cx="250" cy="250" r="200" />
            </svg>
            <svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <circle cx="250" cy="250" r="200" />
            </svg>
            <svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <circle cx="250" cy="250" r="200" />
            </svg>
            <svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <circle cx="250" cy="250" r="200" />
            </svg>
            <svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <circle cx="250" cy="250" r="200" />
            </svg>
          </div>
        </label>
      </SwitchContainer>
    </DarkModeContainer>
  )
}

export default DarkModeToggler
