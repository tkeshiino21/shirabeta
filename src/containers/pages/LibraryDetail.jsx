import { connect } from 'react-redux';
import LibraryDetail from 'components/pages/LibraryDetail';
import {
  libraryDetailRequest,
  commentRequest,
} from 'duck/libraryDetail/operations';
import { bookBorrow } from 'duck/libraryDetail/operations';
import { bookComment } from 'duck/libraryDetail/operations';

const mapStateToProps = state => ({
  library: state.libraryDetail.response,
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
    dispatch(commentRequest(ISBN));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LibraryDetail);
