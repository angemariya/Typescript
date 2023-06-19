import { createContext, useState } from "react";
import styles from "./styles.module.scss";

export const ThemeContext = createContext("light")

export const ThemeContainer = (props: {children: React.ReactNode}) => {
    const [theme, setTheme] = useState("dark")

    return (
        <ThemeContext.Provider value={theme}>
            <button className={styles.button} onClick={()=>{
                theme === "light" ? 
                setTheme("dark") : 
                setTheme("light")}}>Change theme</button>
            {props.children}
        </ThemeContext.Provider>
    )
}