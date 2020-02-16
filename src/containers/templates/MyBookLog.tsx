import { connect } from 'react-redux';
import MyBookLog from 'components/templates/MyBookLog';
import { userComments, userLikes } from 'duck/myPage/operations';

const mapStateToProps = (state: any) => ({
  userComments: state.myPage.userComments,
  userLikes: state.myPage.userLikes,
  ISBNS: state.firebase.profile.likes,
  isLoading: state.myPage.isLoading,
  uid: state.firebase.auth.uid,
});

const mapDispatchToProps = (dispatch: any) => ({
  onUserLikes: (ISBN: string) => {
    dispatch(userLikes(ISBN));
  },
  onUserComments: (uid: string) => {
    dispatch(userComments(uid));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyBookLog);
