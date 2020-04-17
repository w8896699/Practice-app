/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Route } from 'react-router-dom';
// import { render } from 'node-sass';
import { connect } from 'react-redux';
import CollectionPage from '../collection/collection.page';
import PreviewofCollection from '../../components/collection-overview/collection-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { firestore, convertCollectionsSnapShotToMap } from '../../firebase/filrebase.util';
import * as shopAction from '../../redux/shop/shop.actions';


const CollectionOverviewWithSpinner = WithSpinner(CollectionPage);
const PreviewofCollectionWithSpinner = WithSpinner(PreviewofCollection);
class ShopPage extends React.Component {
state ={
  loading: true,
}

unsubscribeFromSnapshot = null;

componentDidMount() {
  const { updateCollections } = this.props;
  const collectionRef = firestore.collection('collections'); // 从firestore里把整个collection的ref拿出来,

  // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (Snapshot) => {
  //   const collectionMap = convertCollectionsSnapShotToMap(Snapshot);
  //   updateCollections(collectionMap); // 这里是async, 需要等待的,接到信息了update到redux里头去
  //   this.setState({ loading: false });
  // }); //= > this means whenever collectionSnapshot got update, or run first time this will send collection data arry to us
  collectionRef.get().then((Snapshot) => { // 这个是标准格式,上面那个是firebase提供的方法 m m m m
    const collectionMap = convertCollectionsSnapShotToMap(Snapshot);
    updateCollections(collectionMap);
    this.setState({ loading: false });
  });
}

render() {
  const { match } = this.props; // 这里的match是上一级router传下来的
  const { loading } = this.state;
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} render={(props) => <PreviewofCollectionWithSpinner isLoading={loading} {...props} />} />
      <Route path={`${match.path}/:collectionID`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
    </div>
  );
}
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) => dispatch(shopAction.updateCollections(collectionMap)), // conclusion, get data from database, and put in redux
});
export default connect(null, mapDispatchToProps)(ShopPage);
