import React, { useState } from 'react'
import styled from 'styled-components'
import NextLogo from '../../public/nextjs.svg'
import ReactLogo from '../../public/React-icon.svg'
import GatsbyLogo from '../../public/gatsby-icon.svg'
import VueLogo from '../../public/vue.svg'
import NuxtLogo from '../../public/nuxt.svg'
import GridsomeLogo from '../../public/gridsome.svg'
import GraphqlLogo from '../../public/graphql.svg'
import JsLogo from '../../public/js-icon.svg'
import NetlifyLogo from '../../public/netlify.svg'
import PhotoshopLogo from '../../public/photoshop.svg'
import VercelLogo from '../../public/vercel.svg'
import PrismicLogo from '../../public/prismic.svg'
import GhostLogo from '../../public/ghost.svg'
import FigmaLogo from '../../public/figma.svg'
import JamstackLogo from '../../public/jamstack.svg'
import { motion, AnimatePresence } from 'framer-motion'

const StackContainer = styled.div`
  background: var(--cardBackground1);
  transition:background 0.5s ease;
  border-radius:6px;
  padding:24px;
  display:flex;
  flex-flow:row wrap;
  justify-content:space-between;
  align-items:center;
  width:100%;
  z-index:20;
  svg{
    max-height:50px;
    max-width:140px;
    margin:6px 0px;
    opacity:0.2;
    cursor:pointer;
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
    margin:6px;
    transition: opacity 0.3s ease;
    @media (max-width:1024px) {
      max-height:30px;
      max-width:85px;
    } 
    &.active{
      opacity:1;
    }
  }
`
const StackDescription = styled.div`
  width:100%;
  background: var(--cardBackground2);
  transition:background 0.5s ease;
  border-radius:0px 0px 6px 6px;
  -webkit-box-shadow: inset 1px 22px 15px -21px rgba(0,0,0,0.55); 
  box-shadow: inset 1px 22px 15px -21px rgba(0,0,0,0.55);
  transform:translateY(-3px);
  overflow:hidden;
  display:flex;
  flex-flow:row wrap;
  justify-content:space-between;
  align-items:center;
  z-index:10;
  min-height:160px;
  @media (max-width:1024px) {
    min-height:200px;
  } 
`
const StackDescriptionContent = styled(motion.div)`
  width:100%;
  display:flex;
  flex-flow:column;
  justify-content:center;
  align-items:flex-start;
  padding:24px;
  position:relative;
  h3{
    font-size:1.6rem;
    margin:0;
    margin-bottom:6px;
  }
  p{
    margin:0px;
    width:70%;
    opacity:0.6;
    line-height:1.2rem;
  }
  svg{
    position:absolute;
    max-width:400px;
    max-height:200px;
    right: -105px;
    bottom: -29px;
    opacity:0.04;
    @media (max-width:1024px) {
      max-width:300px;
      max-height:200px;
    } 
  }
`

const AboutTechStack = () => {
  const [tech, setTech] = useState('JsLogo');

  const descHandler = (techName) => {
    setTech(techName)
  }

  return (
    <>
      <StackContainer>
        <JsLogo onClick={() => descHandler('JsLogo')} className={tech === 'JsLogo' ? "active" : ""}/>
        <JamstackLogo onClick={() => descHandler('JamstackLogo')} className={tech === 'JamstackLogo' ? "active" : ""}/>
        <GraphqlLogo onClick={() => descHandler('GraphqlLogo')} className={tech === 'GraphqlLogo' ? "active" : ""}/>
        <ReactLogo onClick={() => descHandler('ReactLogo')} className={tech === 'ReactLogo' ? "active" : ""}/>
        <NextLogo onClick={() => descHandler('NextLogo')} className={tech === 'NextLogo' ? "active" : ""}/>
        <GatsbyLogo onClick={() => descHandler('GatsbyLogo')} className={tech === 'GatsbyLogo' ? "active" : ""}/>
        <VueLogo onClick={() => descHandler('VueLogo')} className={tech === 'VueLogo' ? "active" : ""}/>
        <NuxtLogo onClick={() => descHandler('NuxtLogo')} className={tech === 'NuxtLogo' ? "active" : ""}/>
        <GridsomeLogo onClick={() => descHandler('GridsomeLogo')} className={tech === 'GridsomeLogo' ? "active" : ""}/>
        <NetlifyLogo onClick={() => descHandler('NetlifyLogo')} className={tech === 'NetlifyLogo' ? "active" : ""}/>
        <VercelLogo onClick={() => descHandler('VercelLogo')} className={tech === 'VercelLogo' ? "active" : ""}/>
        <PrismicLogo onClick={() => descHandler('PrismicLogo')} className={tech === 'PrismicLogo' ? "active" : ""}/>
        <GhostLogo onClick={() => descHandler('GhostLogo')} className={tech === 'GhostLogo' ? "active" : ""}/>
        <FigmaLogo onClick={() => descHandler('FigmaLogo')} className={tech === 'FigmaLogo' ? "active" : ""}/>
        <PhotoshopLogo onClick={() => descHandler('PhotoshopLogo')} className={tech === 'PhotoshopLogo' ? "active" : ""}/>
      </StackContainer>
      <StackDescription>
        <AnimatePresence exitBeforeEnter initial={false}>
          {tech === 'JsLogo' && 
          <StackDescriptionContent initial={{opacity:0,x:-5}} animate={{opacity:1,x:0}} exit={{opacity:0,x:5}} transition={{ duration:0.5}} key="JsLogo">
            <h3>Javascript</h3>
            <p>Vanilla JS, modern ES6+ features and methods, design patterns and all the cool stuff which i use to optimize my applications.</p>
            <JsLogo/>
          </StackDescriptionContent>}
          {tech === 'JamstackLogo' && 
          <StackDescriptionContent initial={{opacity:0,x:-5}} animate={{opacity:1,x:0}} exit={{opacity:0,x:5}} transition={{ duration:0.5}} key="jamstack">
            <h3>Jamstack</h3>
            <p>Javascript - API - Markup architecture goodness, my favorite trifecta.</p>
            <JamstackLogo/>
          </StackDescriptionContent>}
          {tech === 'GraphqlLogo' && 
          <StackDescriptionContent initial={{opacity:0,x:-5}} animate={{opacity:1,x:0}} exit={{opacity:0,x:5}} transition={{ duration:0.5}} key="graphqllogo">
            <h3>GraphQL</h3>
            <p>Love this query language. I've been using it on my gatsby projects and it's sweet.</p>
            <GraphqlLogo/>
          </StackDescriptionContent>}
          {tech === 'ReactLogo' && 
          <StackDescriptionContent initial={{opacity:0,x:-5}} animate={{opacity:1,x:0}} exit={{opacity:0,x:5}} transition={{ duration:0.5}} key="reactlogo">
            <h3>React</h3>
            <p>My main battle horse, i love working with React and seeing how now everything is possible thanks to JSX.</p>
            <ReactLogo/>
          </StackDescriptionContent>}
          {tech === 'NextLogo' && 
          <StackDescriptionContent initial={{opacity:0,x:-5}} animate={{opacity:1,x:0}} exit={{opacity:0,x:5}} transition={{ duration:0.5}} key="Nextlogo">
            <h3>Next JS</h3>
            <p>This sweet framework gives my apps superpowers with it's SSR/SSG capabilities, Headless CMS connectivity and self ran APIs, it's BONKERS.</p>
            <NextLogo/>
          </StackDescriptionContent>}
          {tech === 'GatsbyLogo' && 
          <StackDescriptionContent initial={{opacity:0,x:-5}} animate={{opacity:1,x:0}} exit={{opacity:0,x:5}} transition={{ duration:0.5}} key="Gatsbylogo">
            <h3>Gatsby</h3>
            <p>I love this Static Site Generator. It's well populated plugin ecosystem is delicious (And Gatsby-Image rocks).</p>
            <GatsbyLogo/>
          </StackDescriptionContent>}
          {tech === 'VueLogo' && 
          <StackDescriptionContent initial={{opacity:0,x:-5}} animate={{opacity:1,x:0}} exit={{opacity:0,x:5}} transition={{ duration:0.5}} key="Vuelogo">
            <h3>Vue</h3>
            <p>Loving Vue 3 approach with it's composition API together with directives (still love react more lol).</p>
            <VueLogo/>
          </StackDescriptionContent>}
          {tech === 'NuxtLogo' && 
          <StackDescriptionContent initial={{opacity:0,x:-5}} animate={{opacity:1,x:0}} exit={{opacity:0,x:5}} transition={{ duration:0.5}} key="Nuxtlogo">
            <h3>Nuxt</h3>
            <p>Pretty cool SSR solution for Vue, really easy to learn and easy to set up.</p>
            <NuxtLogo/>
          </StackDescriptionContent>}
          {tech === 'GridsomeLogo' && 
          <StackDescriptionContent initial={{opacity:0,x:-5}} animate={{opacity:1,x:0}} exit={{opacity:0,x:5}} transition={{ duration:0.5}} key="Gridsomelogo">
            <h3>Gridsome</h3>
            <p>Gatsby for Vue? Count me in!</p>
            <GridsomeLogo/>
          </StackDescriptionContent>}
          {tech === 'NetlifyLogo' && 
          <StackDescriptionContent initial={{opacity:0,x:-5}} animate={{opacity:1,x:0}} exit={{opacity:0,x:5}} transition={{ duration:0.5}} key="Netlifylogo">
            <h3>Netlify</h3>
            <p>My go to solution to my SSG needs, CI/CD, form handling, cloud functions, analytics, its sweet!</p>
            <NetlifyLogo/>
          </StackDescriptionContent>}
          {tech === 'PrismicLogo' && 
          <StackDescriptionContent initial={{opacity:0,x:-5}} animate={{opacity:1,x:0}} exit={{opacity:0,x:5}} transition={{ duration:0.5}} key="Prismiclogo">
            <h3>Prismic</h3>
            <p>My go-to solution for Headless CMS. It's free tier is sweet and you have unlimited locales baby!</p>
            <PrismicLogo/>
          </StackDescriptionContent>}
          {tech === 'GhostLogo' && 
          <StackDescriptionContent initial={{opacity:0,x:-5}} animate={{opacity:1,x:0}} exit={{opacity:0,x:5}} transition={{ duration:0.5}} key="Ghostlogo">
            <h3>Ghost</h3>
            <p>Pretty cool self hosted CMS, goes really well with SSR/SSG framework integrations.</p>
            <GhostLogo/>
          </StackDescriptionContent>}
          {tech === 'VercelLogo' && 
          <StackDescriptionContent initial={{opacity:0,x:-5}} animate={{opacity:1,x:0}} exit={{opacity:0,x:5}} transition={{ duration:0.5}} key="Vercellogo">
            <h3>Vercel</h3>
            <p>Netlify for NextJS lol. Still pretty damn sweet.</p>
            <VercelLogo/>
          </StackDescriptionContent>}
          {tech === 'FigmaLogo' && 
          <StackDescriptionContent initial={{opacity:0,x:-5}} animate={{opacity:1,x:0}} exit={{opacity:0,x:5}} transition={{ duration:0.5}} key="Figmalogo">
            <h3>Figma</h3>
            <p>The modern product designer standarized tool, a must know for everyone now a days.</p>
            <FigmaLogo/>
          </StackDescriptionContent>}
          {tech === 'PhotoshopLogo' && 
          <StackDescriptionContent initial={{opacity:0,x:-5}} animate={{opacity:1,x:0}} exit={{opacity:0,x:5}} transition={{ duration:0.5}} key="Photoshoplogo">
            <h3>Photoshop</h3>
            <p>I;ve always loved Photoshop, you can do so many things with it and it will never get old (even in the vector world we're living in now).</p>
            <PhotoshopLogo/>
          </StackDescriptionContent>}
        </AnimatePresence>
      </StackDescription>
    </>
  )
}

export default AboutTechStack
