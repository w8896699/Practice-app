import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PreviewofCollection from '../preview-collection/preview-collection.component';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';

import './collection-overview.style.scss';

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewofCollection key={id} {...otherCollectionProps} />
    ))}

  </div>

);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
