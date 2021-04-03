import React from 'react'
import NavBar from './common/Navbar'
import styled from 'styled-components'

const PageContainer = styled.div`
  background-color: var(--pageBackground);
  transition: color 0.5s ease,background 0.5s ease;
  min-height:100vh;
`

const Layout = ({children, theme, switchTheme, menuLinks, altLangs, lang}) => {
  return (
    <div>
      <PageContainer>
        <NavBar switchTheme={switchTheme} theme={theme} menuLinks={menuLinks} altLangs={altLangs} currentLang={lang.currentLang}/>
        {children}
      </PageContainer>
    </div>
  )
}

export default Layout
