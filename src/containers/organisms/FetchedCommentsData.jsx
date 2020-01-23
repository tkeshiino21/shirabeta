import { connect } from 'react-redux';
import LibraryDetail from 'components/pages/LibraryDetail';
import {
  libraryDetailRequest,
  commentsRequest,
} from 'duck/libraryDetail/operations';

const formatData = state => {
  return state.libraryDetail.likes.docs === undefined
    ? null
    : state.libraryDetail.likes.docs.map(queryDocumentSnapshot => {
        return queryDocumentSnapshot.data();
      });
};

const mapStateToProps = state => ({
  comments: formatData(state),
  isLoading: state.libraryDetail.isLoading,
});

const mapDispatchToProps = dispatch => ({
  onRequest: ISBN => {
    dispatch(libraryDetailRequest(ISBN));
  },
  onCommentsRequest: ISBN => {
    dispatch(commentsRequest(ISBN));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LibraryDetail);
