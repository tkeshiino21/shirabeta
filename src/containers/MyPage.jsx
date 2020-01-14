import MyPage from 'components/MyPage';

import { connect } from 'react-redux';
import App from 'App';
import authSwitch from 'duck/auth/operations';

const mapStateToProps = state => ({
  authState: state.firebase.auth.uid === undefined ? false : true,
  userName: state.firebase.profile.name,
});

export default connect(mapStateToProps)(MyPage);
