import { connect } from 'react-redux';
import LandingToSign from 'components/organisms/LandingToSign';
import authSwitch from 'duck/auth/operations';

const mapDipatchToProps = dispatch => ({
  onSignUp: userData => {
    dispatch(authSwitch({ method: 'signup', userData }));
  },
  onLogIn: userData => {
    dispatch(authSwitch({ method: 'login', userData }));
  },
});

export default connect(null, mapDipatchToProps)(LandingToSign);
