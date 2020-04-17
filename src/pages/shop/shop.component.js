/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
// import { render } from 'node-sass';
import { connect } from 'react-redux';
import CollectionPage from '../collection/collection.page';
import PreviewofCollection from '../../components/collection-overview/collection-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import * as shopAction from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selector';


const CollectionOverviewWithSpinner = WithSpinner(CollectionPage);
const PreviewofCollectionWithSpinner = WithSpinner(PreviewofCollection);
class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    // console.log('i m herereresdaf');
    fetchCollectionStartAsync();
  }

  render() {
    const { match, isCollectionFetching, isCollectionLoaded } = this.props; // 这里的match是上一级router传下来的
    // console.log('hiahia', isCollectionLoaded);
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <PreviewofCollectionWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionID`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(shopAction.fetchCollectionStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
