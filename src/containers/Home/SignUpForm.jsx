import { connect } from 'react-redux';
import SignUpForm from 'components/Home/SignUp/SignUpForm';
import authSwitch from 'duck/auth/operations';

const mapDispatchToProps = dispatch => ({
  onSignUp: userData => {
    dispatch(authSwitch({ method: 'signup', userData: userData }));
  },
  onLogIn: userData => {
    dispatch(authSwitch({ method: 'login', userData: userData }));
  },
});

export default connect(null, mapDispatchToProps)(SignUpForm);
