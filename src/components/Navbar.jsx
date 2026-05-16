import { useEffect, useState } from 'react';
import { useNewsContext } from '../context/NewsContext';
import Wrapper from './Wrapper'
import ThemeToggle from '../UI/ThemeToggle';
import { FaRegNewspaper } from 'react-icons/fa';

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
        <div className={` bg-base-300 ${className}`}>
            <Wrapper>
                <div className="navbar shadow-sm py-6">
                    <div onClick={handleRefetch} className="navbar-start cursor-pointer">
                        <FaRegNewspaper className='text-5xl'/>
                        <a className=" text-xl font-semibold ml-4">nowNews</a>
                    </div>
                    <div className="navbar-end flex gap-4">
                        <input onChange={searchNews} type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                        <ThemeToggle/>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Navbar