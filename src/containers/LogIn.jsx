import { connect } from 'react-redux';
import AuthStateNav from 'components/Layout/Header/AuthStateNav';
import authSwitch from 'duck/auth/operations';

const mapDipatchToProps = dispatch => ({
  onLogOut: userData => {
    dispatch(authSwitch({ method: 'login', userData: userData }));
  },
});

export default connect(mapStateToProps, mapDipatchToProps)(LogIn);
