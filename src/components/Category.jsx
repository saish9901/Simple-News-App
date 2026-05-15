import { useNewsContext } from '../context/NewsContext'
import Wrapper from './Wrapper'

const Category = ({ className }) => {

    const {setNews,fetchNews} = useNewsContext()

    const categoryBtn = [
        'Business',
        'Entertainment',
        'General',
        'Health',
        'Science',
        'Sports',
        'Technology'
    ]


    const handleCategory = async (e) => {
        const categoryClick = e.target.value
        const data = await fetchNews(`/everything?q=${categoryClick}`);
        setNews(data.articles)
    }

    

    return (
        <Wrapper>
            <div className={`max-w-full w-fit flex gap-5 mx-auto overflow-x-auto scrollbar-none ${className}`}>
                {categoryBtn.map((category) => {
                    return (
                        <button value={category} onClick={handleCategory} key={category} className="btn btn-primary">{category}</button>
                    )
                })}
            </div>
        </Wrapper>
    )
}

export default Category