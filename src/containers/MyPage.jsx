import MyPage from 'components/MyPage/MyPage';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  authState: state.firebase.auth.uid === undefined ? false : true,
  userName: state.firebase.profile.name,
});

export default connect(mapStateToProps)(MyPage);
