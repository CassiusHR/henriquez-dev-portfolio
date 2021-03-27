import React from 'react'
import NavBar from './common/Navbar'

const Layout = ({children, theme, switchTheme, menuLinks}) => {
  return (
    <div>
      <NavBar switchTheme={switchTheme} theme={theme} menuLinks={menuLinks}/>
      {children}
    </div>
  )
}

export default Layout
