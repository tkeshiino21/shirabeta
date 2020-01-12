import { connect } from 'react-redux';
import AuthStateNav from 'Layout/Header/AuthStateNav';
import authSwitch from 'duck/auth/operations';

const mapStateToProps = state => ({
  authState: state.firebase.uid === undefined ? false : true,
  userName: state.firebase.profile.name,
});

const mapDipatchToProps = dispatch => ({
  onLogOut: () => {
    dispatch(authSwitch({ method: 'logout', userData: null }));
  },
});

export default connect(mapStateToProps, mapDipatchToProps)(AuthStateNav);