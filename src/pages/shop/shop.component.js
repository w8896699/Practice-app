/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Route } from 'react-router-dom';
// import { render } from 'node-sass';
import { connect } from 'react-redux';
import CollectionPageContainer from '../collection/collection.container';
import CollectionsOverviewContainer from '../../components/collection-overview/collection-overview.container';

import * as shopAction from '../../redux/shop/shop.actions';


// const CollectionOverviewWithSpinner = WithSpinner(CollectionPage);
// const PreviewofCollectionWithSpinner = WithSpinner(PreviewofCollection);
class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  render() {
    const { match } = this.props; // 这里的match是上一级router传下来的
    // console.log('hiahia', isCollectionLoaded);
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionID`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

// const mapStateToProps = createStructuredSelector({
//   // isCollectionFetching: selectIsCollectionFetching,
//   isCollectionLoaded: selectIsCollectionLoaded,
// });

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(shopAction.fetchCollectionStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
