import React from 'react'
import Wrapper from './Wrapper'
import { useNewsContext } from '../context/NewsContext'

const Category = ({className}) => {

    const categoryBtn = [
        'Business',
        'Entertainment',
        'General',
        'Health',
        'Science',
        'Sports',
        'Technology'
    ]


    return (
        <Wrapper>
            <div className={`max-w-full w-fit flex gap-5 mx-auto overflow-x-auto scrollbar-none ${className}`}>
                {categoryBtn.map((category) => {
                    return (
                        <button key={category} className="btn btn-primary">{category}</button>
                    )
                })}
            </div>
        </Wrapper>
    )
}

export default Category