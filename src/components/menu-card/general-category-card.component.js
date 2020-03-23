import React from 'react'
import './general-category-card.style.scss'

const CategoryCard = ({title,imageUrl,size}) => {
    return (
        <div className = 'menu-item'>
            <div  
                style = {{backgroundImage: `url(${imageUrl})`}}
                className='background-image'
              />
                <div className = 'content'>
                    <h1 className = 'title'> {title.toUpperCase()}</h1>
                    <h1 className = 'subtitle'> Shop Now</h1>
                </div>
            
        </div>
    )
}
export default CategoryCard