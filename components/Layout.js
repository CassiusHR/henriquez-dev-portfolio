import React from 'react'
import NavBar from './common/Navbar'

const Layout = ({children, switchTheme}) => {
  return (
    <div>
      <button onClick={switchTheme}>Change theme</button>
      <NavBar/>
      {children}
    </div>
  )
}

export default Layout
