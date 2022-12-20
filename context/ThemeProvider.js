import React, {useState} from 'react'

export const ThemeContext = React.createContext();

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState("dark")
    function changeTheme(){
        theme === "dark" ? setTheme("light") : setTheme("dark")
    }
  return (
    <ThemeContext.Provider value={{
        theme, 
        setTheme,
        changeTheme
    }}>
        {children}
    </ThemeContext.Provider>
  )
};