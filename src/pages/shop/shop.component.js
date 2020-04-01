import React from 'react';

import SHOP_DATA from './shop.data';
import PreviewofCollection from '../../components/preview-collection/preview-collection.component';

class ShopPage extends React.Component {
  state = { collections: SHOP_DATA }

  render() {
    const { collections } = this.state;
    return (collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewofCollection key={id} {...otherCollectionProps} />
    )));
  }
}

export default ShopPage;
