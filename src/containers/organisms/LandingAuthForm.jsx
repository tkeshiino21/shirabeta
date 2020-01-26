import { connect } from 'react-redux';
import LandingAuthForm from 'components/organisms/LandingToSign';
import authSwitch from 'duck/auth/operations';

const mapDipatchToProps = dispatch => ({
  onSignUp: userData => {
    dispatch(authSwitch({ method: 'signup', userData: userData }));
  },
  onLogIn: userData => {
    dispatch(authSwitch({ method: 'login', userData: userData }));
  },
});

export default connect(null, mapDipatchToProps)(LandingAuthForm);
