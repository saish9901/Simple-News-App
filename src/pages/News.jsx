import axios from "axios"
import Wrapper from "../components/Wrapper"
import { useEffect } from "react"
import api from "../config/axios"


const News = () => {

    const fetchNews = async () => {
        const response = await api.get(`/everything?q=bitcoin&apiKey=${import.meta.env.VITE_API_KEY}`)
    }

    const newsData = useEffect(() => {
        fetchNews()
    }, [])

    return (
        <Wrapper>
            <div className="grid grid-cols-4 gap-8 max-[900px]:grid-cols-3 max-[700px]:grid-cols-2 max-[500px]:grid-cols-1">
                <NewsCard />
            </div>
        </Wrapper>
    )
}

const NewsCard = () => {
    return (
        <div className="card bg-base-300 shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}
export default News