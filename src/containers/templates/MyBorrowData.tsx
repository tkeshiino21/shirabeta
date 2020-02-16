import { connect } from 'react-redux';
import { myPageRequest, bookReturn } from 'duck/myPage/operations';
import MyBorrowData from 'components/templates/MyBorrowData';

const mapStateToProps = (state: any) => ({
  uid: state.firebase.auth.uid,
  isLoading: state.myPage.isLoading,
  borrowData: state.myPage.response,
});

const mapDispatchToProps = (dispatch: any) => ({
  onRequest: (uid: string) => {
    dispatch(myPageRequest(uid));
  },
  onReturn: (ISBN: string, uid: string) => {
    dispatch(bookReturn(ISBN, uid));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyBorrowData);
