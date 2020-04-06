import React from 'react';

import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.page';
import PreviewofCollection from '../../components/collection-overview/collection-overview.component';

const ShopPage = ({ match }) => (
// state = { collections: SHOP_DATA }
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={PreviewofCollection} />
    <Route path={`${match.path}/:collectionID`} component={CollectionPage} />
  </div>
);


export default (ShopPage);
