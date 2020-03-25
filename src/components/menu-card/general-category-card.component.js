/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { withRouter } from 'react-router-dom';
import './general-category-card.style.scss';

const CategoryCard = ({
  title, imageUrl, size, linkUrl, history, match,
}) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
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
export default withRouter(CategoryCard);
