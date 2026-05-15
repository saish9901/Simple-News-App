import { useEffect } from "react"
import Wrapper from "../components/Wrapper"
import { useNewsContext } from "../context/NewsContext"
import Loader from "../components/Loader"


const News = () => {

    const { news, setNews, fetchNews, loading } = useNewsContext()

    useEffect(() => {
        (async () => {
            const data = await fetchNews();
            setNews(data.articles)
        })()
    }, [])

    if(loading) return <Loader/>


    return (
        <Wrapper>
            <div className="grid grid-cols-4 gap-8 max-[900px]:grid-cols-3 max-[700px]:grid-cols-2 max-[500px]:grid-cols-1">
                {news.map((news,index) => {
                    if(!news.urlToImage){
                        return null
                    }
                    return (
                        <NewsCard news={news} key={index}/>
                    )
                })}

            </div>
        </Wrapper>
    )
}

const NewsCard = ({news}) => {
    return (
        <div className="card bg-base-300 shadow-sm">
            <figure>
                <img
                 className="aspect-video object-cover"
                    src={news?.urlToImage}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title line-clamp-2">{news?.title}</h2>
                <p className="line-clamp-4">{news?.description}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>window.open(news?.url)} className="btn badge-outline mt-5">Read More</button>
                </div>
            </div>
        </div>
    )
}
export default News
export {NewsCard}