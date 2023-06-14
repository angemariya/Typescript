import { createContext, useState } from "react"

export const ThemeContext = createContext("light")

export const ThemeContainer = (props: {children: React.ReactNode}) => {
    const [theme, setTheme] = useState("light")

    return (
        <ThemeContext.Provider value={theme}>
            <button onClick={()=>{
                theme === "light" ? setTheme("dark") : setTheme("light")}}>Change theme</button>
            {props.children}
        </ThemeContext.Provider>
    )
}