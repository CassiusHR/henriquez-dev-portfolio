import React from 'react'
import styled from 'styled-components'
import { useRouter } from "next/router";

const FooterWrapper = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  flex-direction:row;
  align-items:center;
`
const Container = styled.div`
  width:100%;
  max-width: 1024px;
  padding:24px;
  transition:background 0.3 ease-in-out;
  background:transparent;
  &.index {
    background: var(--background);
    border-top:1px solid var(--cardBackground2);
  }
  p{
    font-weight:100;
    text-align:center;
    font-size:12px;
    line-height:16px;
  }
`

const Footer = () => {
  const router = useRouter();
  return (
    <FooterWrapper>
      <Container className={router.pathname === "/" ? "index" : ""}>
        <p>Made with ❤️ by Carlos Henriquez using React, NextJS, Vercel and Prismic CMS &copy; {new Date().getFullYear()}</p>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
