import MyPage from 'components/pages/MyPage';
import { connect } from 'react-redux';
import { bookReturn, myPageRequest } from 'duck/myPage/operations';

const mapStateToProps = state => ({
  authState: state.firebase.auth.uid !== undefined,
  uid: state.firebase.auth.uid,
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
