import { createContext, useContext, useState } from "react";
import api from '../config/axios'

//create context
const NewsContext = createContext();

//context provider
const NewsContextProvider = ({ children }) => {

    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchNews = async (url = '/everything?q=bitcoin') => {
        try {
            setLoading(true)
            const response = await api.get(`${url}&apiKey=${import.meta.env.VITE_API_KEY}`)
            setLoading(false)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    const value = {
        news,
        setNews,
        fetchNews,
        loading
    }

    return (
        <NewsContext.Provider value={value}>
            {children}
        </NewsContext.Provider>
    )
}

//use context
const useNewsContext = () => {
    return useContext(NewsContext);
}

export { NewsContextProvider, useNewsContext };