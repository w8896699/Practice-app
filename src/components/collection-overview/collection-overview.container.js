import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionOverview from './collection-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,

});

// const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview));
// 本来是上面那个样子的.../ 用compose写成下面这个样子
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionOverview);

export default CollectionsOverviewContainer;
