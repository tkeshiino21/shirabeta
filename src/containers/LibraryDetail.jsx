import { connect } from 'react-redux';
import LibraryDetail from 'components/Home/Library/LibraryDetail/LibraryDetail';
import { libraryRequest } from 'duck/requestLibrary/operations';
import { bookBorrow } from 'duck/bookAdd/operations';

const mapStateToProps = state => ({
  library: state.library.response,
  isLoading: state.request.isLoading,
  uid: state.firebase.auth.uid,
});

const mapDispatchToProps = dispatch => ({
  onRequest: ISBN => {
    dispatch(libraryRequest(ISBN));
  },
  onBorrow: (ISBN, title, uid) => {
    dispatch(bookBorrow(ISBN, title, uid));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LibraryDetail);
