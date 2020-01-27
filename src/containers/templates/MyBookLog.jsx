import { connect } from 'react-redux';
import MyBookLog from 'components/templates/MyBookLog';
import { userComments, userLikes } from 'duck/myPage/operations';

const mapStateToProps = state => ({
  userComments: state.myPage.userComments,
  userLikes: state.myPage.userLikes,
  ISBNS: state.firebase.profile.likes,
  isLoading: state.myPage.isLoading,
  uid: state.firebase.auth.uid,
});

const mapDispatchToProps = dispatch => ({
  onUserLikes: ISBN => {
    dispatch(userLikes(ISBN));
  },
  onUserComments: uid => {
    dispatch(userComments(uid));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyBookLog);
