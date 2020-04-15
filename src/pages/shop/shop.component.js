/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import { Route } from 'react-router-dom';
// import { render } from 'node-sass';
import { connect } from 'react-redux';
import CollectionPage from '../collection/collection.page';
import PreviewofCollection from '../../components/collection-overview/collection-overview.component';
import { firestore, convertCollectionsSnapShotToMap } from '../../firebase/filrebase.util';
import * as shopAction from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {
unsubscribeFromSnapshot = null;

componentDidMount() {
  const { updateCollections } = this.props;
  const collectionRef = firestore.collection('collections'); // 从firestore里把整个collection的ref拿出来,

  this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (Snapshot) => {
    const collectionMap = convertCollectionsSnapShotToMap(Snapshot);
    updateCollections(collectionMap);
  }); //= > this means whenever collectionSnapshot got update, or run first time this will send collection data arry to us
}

render() {
  const { match } = this.props; // 这里的match是上一级router传下来的
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={PreviewofCollection} />
      <Route path={`${match.path}/:collectionID`} component={CollectionPage} />
    </div>
  );
}
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) => dispatch(shopAction.updateCollections(collectionMap)), // conclusion, get data from database, and put in redux
});
export default connect(null, mapDispatchToProps)(ShopPage);
