import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import LandingToSign from 'components/organisms/LandingToSign';
import authSwitch from 'duck/auth/operations';

const mapDipatchToProps = (dispatch: any) => ({
  onSignUp: (userData: any) => {
    dispatch(authSwitch('signup', userData));
  },
  onLogIn: (userData: any) => {
    dispatch(authSwitch('login', userData));
  },
});

export default connect(null, mapDipatchToProps)(LandingToSign);
