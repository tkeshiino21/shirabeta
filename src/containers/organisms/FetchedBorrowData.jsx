import { connect } from 'react-redux';
import { myPageRequest } from 'duck/myPage/operations';
import { bookReturn } from 'duck/myPage/operations';
import FetchedBorrowData from 'components/organisms/FetchedBorrowData';

const formatData = state => {
  console.log(state.myPage.response);
  return state.myPage.response.docs === undefined
    ? console.log('hi')
    : state.myPage.response.docs.map(queryDocumentSnapshot => {
        console.log('hi', queryDocumentSnapshot.data());
        return queryDocumentSnapshot.data();
      });
};

const m = state => formatData(state);

const mapStateToProps = state => ({
  uid: state.firebase.auth.uid,
  isLoading: state.myPage.isLoading,
  borrowData: state.myPage.response,
});

const mapDispatchToProps = dispatch => ({
  onRequest: uid => {
    dispatch(myPageRequest(uid));
  },
  onReturn: (ISBN, uid) => {
    dispatch(bookReturn(ISBN, uid));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FetchedBorrowData);
