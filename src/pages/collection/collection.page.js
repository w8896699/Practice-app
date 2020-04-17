import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import './category.style.scss';
import { selectCollection } from '../../redux/shop/shop.selector';

const CollectionPage = ({ collection }) => {
  console.log('hiahia', collection);// 这个地方会是null...因为那个updatecollection是个async,
  const { title, items } = collection;
  return (
    <div className="collection-page">

      <h2 className="title">
        {title}
      </h2>
      <div className="items">
        {items.map((item) => (<CollectionItem key={item.id} item={item} />))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  // selectCollection is a function that returns a function
  collection: selectCollection(ownProps.match.params.collectionID)(state), // this is necessary because unlike otherselectors, this selector needs a part of the state depending on the url parameter
});

export default connect(mapStateToProps)(CollectionPage);
