import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selector';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.page';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state), // use function instead just pass a selector here: 不然Error: Selector creators expect all input-selectors to be functions, instead received the following types: [boolean]
});// 要不loading才不withSpinner

const CollectionPageContainer = compose(
  connect(mapStateToProps), // 这一步就把sate给传到component里
  WithSpinner,
)(CollectionPage);
export default CollectionPageContainer;
