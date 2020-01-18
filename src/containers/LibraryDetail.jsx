import { connect } from 'react-redux';
import LibraryDetail from 'components/Home/Library/LibraryDetail/LibraryDetail';
import {
  libraryRequest,
  commentsRequest,
} from 'duck/requestLibrary/operations';
import { bookBorrow } from 'duck/bookAdd/operations';
import { bookComment } from 'duck/bookReview/operations';

const formatData = state => {
  console.log(state.library.likes.docs);
  return state.library.likes.docs === undefined
    ? null
    : state.library.likes.docs.map(queryDocumentSnapshot => {
        return queryDocumentSnapshot.data();
      });
};

const mapStateToProps = state => ({
  library: state.library.response,
  comments: formatData(state),
  isLoading: state.request.isLoading,
  uid: state.firebase.auth.uid,
  userName: state.firebase.profile.name,
});

const mapDispatchToProps = dispatch => ({
  onRequest: ISBN => {
    dispatch(libraryRequest(ISBN));
  },
  onBorrow: (ISBN, title, uid) => {
    dispatch(bookBorrow(ISBN, title, uid));
  },
  onComment: (ISBN, title, uid, userName, comment) => {
    dispatch(bookComment(ISBN, title, uid, userName, comment));
  },
  onCommentsRequest: ISBN => {
    dispatch(commentsRequest(ISBN));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LibraryDetail);
