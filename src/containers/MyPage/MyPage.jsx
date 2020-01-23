import MyPage from 'components/pages/MyPage';
import { connect } from 'react-redux';
import { bookReturn } from 'duck/bookRegister/operations';
import { myPageRequest } from 'duck/myPage/operations';

const formatData = state => {
  console.log(state.myPage.response.docs);
  return state.myPage.response.docs === undefined
    ? null
    : state.myPage.response.docs.map(queryDocumentSnapshot => {
        return queryDocumentSnapshot.data();
      });
};

const mapStateToProps = state => ({
  authState: state.firebase.auth.uid === undefined ? false : true,
  uid: state.firebase.auth.uid,
  borrowData: formatData(state),
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
