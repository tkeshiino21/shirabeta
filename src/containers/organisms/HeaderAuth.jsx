import { connect } from 'react-redux';
import HeaderAuth from 'components/organisms/HeaderAuth';
import authSwitch from 'duck/auth/operations';

const mapStateToProps = state => ({
  authState: state.firebase.auth.uid !== undefined,
  userName: state.firebase.profile.name,
});

const mapDipatchToProps = dispatch => ({
  onLogOut: () => {
    dispatch(authSwitch({ method: 'logout', userData: null }));
  },
});

export default connect(mapStateToProps, mapDipatchToProps)(HeaderAuth);
