import React, {useState, useEffect} from 'react'

export const ThemeContext = React.createContext();

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState("dark")

    useEffect(()=> {
      if(window.localStorage.getItem("theme")){
        setTheme(window.localStorage.getItem("theme"))
      }
    }, [])

    function changeTheme(){
      if (theme === "dark") {
        setTheme("light");
        window.localStorage.setItem("theme", "light");
      } else {
        setTheme("dark");
        window.localStorage.setItem("theme", "dark");
      }
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