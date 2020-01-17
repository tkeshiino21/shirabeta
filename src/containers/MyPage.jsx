import MyPage from 'components/MyPage/MyPage';
import { connect } from 'react-redux';
import { bookReturn } from 'duck/bookAdd/operations';
import { myPageRequest } from 'duck/requestLibrary/operations';

const mapStateToProps = state => ({
  authState: state.firebase.auth.uid === undefined ? false : true,
  uid: state.firebase.auth.uid,
  borrowData: state.library.response,
});

const mapDispatchToProps = dispatch => ({
  onRequest: uid => {
    dispatch(myPageRequest(uid));
  },
  onReturn: (ISBN, uid) => {
    dispatch(bookReturn(ISBN, uid));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPage);
