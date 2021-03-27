import React, { createContext, useState } from 'react'

export const GlobalContext = createContext();
const GlobalContextProvider = (props) => {
  const [contextData, setContextData] = useState({
  })

  return(
    <GlobalContext.Provider value={{contextData,setContextData}}>
      {props.children}
    </GlobalContext.Provider>
  )
}
export default GlobalContextProvider
