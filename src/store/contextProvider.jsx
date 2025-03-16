import { createContext, useState } from "react";

const ThemeContext = createContext();

const ContextProvider = ({children})=>{
    const [mode,setMode] = useState('night');
    return(
        <ThemeContext.Provider value={{mode,setMode}}>
          {children}
        </ThemeContext.Provider>
    )
}

export {ContextProvider,ThemeContext};