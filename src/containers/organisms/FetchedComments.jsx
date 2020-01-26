import { connect } from 'react-redux';
import FetchedComments from 'components/organisms/FetchedComments';
import {
  libraryDetailRequest,
  commentRequest,
} from 'duck/libraryDetail/operations';

const formatData = state => {
  return state.libraryDetail.comment.docs === undefined
    ? null
    : state.libraryDetail.comment.docs.map(queryDocumentSnapshot => {
        return queryDocumentSnapshot.data();
      });
};

const mapStateToProps = state => ({
  comments: formatData(state),
  isFetching: state.libraryDetail.isFetching,
});

const mapDispatchToProps = dispatch => ({
  onRequest: ISBN => {
    dispatch(libraryDetailRequest(ISBN));
  },
  onCommentRequest: ISBN => {
    dispatch(commentRequest(ISBN));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FetchedComments);
