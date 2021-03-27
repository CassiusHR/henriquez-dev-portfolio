import React from 'react'
import NavBar from './common/Navbar'

const Layout = ({children, theme, switchTheme, menuLinks, altLangs, lang}) => {
  return (
    <div>
      <NavBar switchTheme={switchTheme} theme={theme} menuLinks={menuLinks} altLangs={altLangs} currentLang={lang.currentLang}/>
      {children}
    </div>
  )
}

export default Layout
