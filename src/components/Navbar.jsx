import { useEffect, useState } from 'react';
import { useNewsContext } from '../context/NewsContext';
import Wrapper from './Wrapper'

const Navbar = ({ className }) => {

    //newsContext
    const { setNews, fetchNews } = useNewsContext()


    //debounce
    let timer = null;
    const searchNews = (e) => {
        const searchValue = e.target.value;
        if (!searchValue) return
        clearTimeout(timer)
        timer = setTimeout(async () => {
            const data = await fetchNews(`/everything?q='${searchValue}'`);
            setNews(data.articles)
        }, 1000);
    }




    //refetch/refresh
    const handleRefetch = async () => {
        const data = await fetchNews();
        setNews(data.articles)
    }

    //debounce
    // a --> settimenout ->  clear
    // b --> setttimeout ->


    return (
        <div className={`bg-gray-800 ${className}`}>
            <Wrapper>
                <div className="navbar bg-gray-800 shadow-sm py-6">
                    <div onClick={handleRefetch} className="navbar-start">
                        <a className="btn btn-ghost text-xl">nowNews</a>
                    </div>
                    <div className="navbar-end">
                        <input onChange={searchNews} type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                                <span className="badge badge-xs badge-primary indicator-item"></span>
                            </div>
                        </button>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Navbar