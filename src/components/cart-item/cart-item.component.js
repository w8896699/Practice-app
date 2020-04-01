import React from 'react';
import './cart-item.style.scss';


const CardItem = ({
  item: {
    imageUrl, price, name, quantity,
  },
}) => {
  console.log('I am here');
  return (
    <div className="cart-items">
      <img src={imageUrl} alt="item" />
      <div className="item-info">
        <span className="name">{name}</span>
        <span className="price">
          {quantity }
          {' '}
          x $
          {price}
        </span>
      </div>
    </div>
  );
};
export default CardItem;
