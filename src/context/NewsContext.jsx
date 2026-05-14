import { createContext, useContext } from "react";
import News from "../pages/News";

//create context
const NewsContext = createContext();

//context provider
const NewsContextProvider = ({ children }) => {
    return (
        <NewsContext.Provider value={"saish"}>
            {children}
        </NewsContext.Provider> 
    )
}

//use context
const useNewsContext = () => {
    return useContext(NewsContext);
}

export { NewsContextProvider, useNewsContext };