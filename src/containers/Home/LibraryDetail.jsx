import { connect } from 'react-redux';
import LibraryDetail from 'components/pages/LibraryDetail';
import {
  libraryDetailRequest,
  commentsRequest,
} from 'duck/libraryDetail/operations';
import { bookBorrow } from 'duck/bookRegister/operations';
import { bookComment } from 'duck/libraryDetail/operations';

const formatData = state => {
  return state.libraryDetail.likes.docs === undefined
    ? null
    : state.libraryDetail.likes.docs.map(queryDocumentSnapshot => {
        return queryDocumentSnapshot.data();
      });
};

const mapStateToProps = state => ({
  library: state.libraryDetail.response,
  comments: formatData(state),
  isLoading: state.libraryDetail.isLoading,
  uid: state.firebase.auth.uid,
  userName: state.firebase.profile.name,
});

const mapDispatchToProps = dispatch => ({
  onRequest: ISBN => {
    dispatch(libraryDetailRequest(ISBN));
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
