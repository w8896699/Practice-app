import React from 'react';
import { withRouter } from 'react-router-dom';
import './general-category-card.style.scss';

const CategoryCard = ({
 title, imageUrl, size, linkUrl, history, match,
}) => {
    console.log('match', match);
    return (
      <div className={`${size} menu-item`} onClick={() => { history.push(`${match.url}${linkUrl}`); }}>
        <div
          style={{ backgroundImage: `url(${imageUrl})` }}
          className="background-image"
        />
        <div className="content">
          <h1 className="title">
            {title.toUpperCase()}
          </h1>
          <h1 className="subtitle"> Shop Now</h1>
        </div>

      </div>
);
    };
export default withRouter(CategoryCard);
