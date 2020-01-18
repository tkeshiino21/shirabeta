import MyPage from 'components/MyPage/MyPage';
import { connect } from 'react-redux';
import { bookReturn } from 'duck/bookAdd/operations';
import { myPageRequest } from 'duck/requestLibrary/operations';

const formatData = state => {
  console.log(state.library.response.docs);
  return state.library.response.docs === undefined
    ? null
    : state.library.response.docs.map(queryDocumentSnapshot => {
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
