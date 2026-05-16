import { createContext, useContext, useEffect, useState } from "react";

//create
const ThemeContext = createContext()

//provider
const ThemeContextProvider = ({children}) => {


    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}


//useContext
const useThemeContext = () => {
    return useContext(ThemeContext);
}

export { ThemeContextProvider, useThemeContext }