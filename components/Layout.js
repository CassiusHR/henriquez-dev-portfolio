import React from 'react'
import NavBar from './common/Navbar'

const Layout = ({children, theme, switchTheme}) => {
  return (
    <div>
      <NavBar switchTheme={switchTheme} theme={theme}/>
      {children}
    </div>
  )
}

export default Layout
