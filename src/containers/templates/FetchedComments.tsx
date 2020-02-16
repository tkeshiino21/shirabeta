import { connect } from 'react-redux';
import FetchedComments from 'components/templates/FetchedComments';
import {
  libraryDetailRequest,
  commentRequest,
} from 'duck/libraryDetail/operations';

const formatData = (state: any) => {
  return state.libraryDetail.comment.docs === undefined
    ? null
    : state.libraryDetail.comment.docs.map(
        (queryDocumentSnapshot: { data: () => void }) => {
          return queryDocumentSnapshot.data();
        },
      );
};

const mapStateToProps = (state: any) => ({
  comments: formatData(state),
  isFetching: state.libraryDetail.isAdding,
});

const mapDispatchToProps = (dispatch: any) => ({
  onRequest: (ISBN: string) => {
    dispatch(libraryDetailRequest(ISBN));
  },
  onCommentRequest: (ISBN: string) => {
    commentRequest(ISBN);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FetchedComments);
