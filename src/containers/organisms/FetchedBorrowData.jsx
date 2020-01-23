import { connect } from 'react-redux';
import { myPageRequest } from 'duck/myPage/operations';
import FetchedBorrowData from 'components/organisms/FetchedBorrowData';

const formatData = state => {
  console.log(state.myPage.response.docs);
  return state.myPage.response.docs === undefined
    ? null
    : state.myPage.response.docs.map(queryDocumentSnapshot => {
        return queryDocumentSnapshot.data();
      });
};

const mapStateToProps = state => ({
  uid: state.firebase.auth.uid,
  borrowData: formatData(state),
});

const mapDispatchToProps = dispatch => ({
  onRequest: uid => {
    dispatch(myPageRequest(uid));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FetchedBorrowData);
