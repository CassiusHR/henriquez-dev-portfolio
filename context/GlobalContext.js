import React, { createContext, useState } from 'react'

export const GlobalContext = createContext();
const GlobalContextProvider = (props) => {
  const [contextData, setContextData] = useState({
    pico:'pico'
  })

  return(
    <GlobalContext.Provider value={{contextData,setContextData}}>
      {props.children}
    </GlobalContext.Provider>
  )
}
export default GlobalContextProvider
