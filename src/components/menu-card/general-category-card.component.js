import React from 'react'
import './general-category-card.style.scss'

const CategoryCard = ({title}) => {
    return (
        <div className = 'menu-item'>
            <div className = 'content'>
                <h1 className = 'title'> {title}</h1>
                <h1 className = 'subtitle'> Shop Now</h1>
        </div>
    </div>
    )
}
export default CategoryCard