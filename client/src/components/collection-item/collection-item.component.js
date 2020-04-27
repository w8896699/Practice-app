import React from 'react';
import './collection-item.style.scss';
import { connect } from 'react-redux';
import StyleButton from '../styled-button/styled-button.component';
import * as setCartItem from '../../redux/cart/cart.action';

const CollectionItem = ({
  item, addItem,
}) => {
  const {
    name, price, imageUrl,
  } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <StyleButton onClick={() => addItem(item)} inverted> ADD TO CART</StyleButton>

    </div>
  );
};
// 在上一行更新了state上面其实是在call dispatch, 然后下面的mapdispatchtoprops读取

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(setCartItem.addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
