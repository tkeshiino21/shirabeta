import { connect } from 'react-redux';
import ContactForm from 'components/Home/Contact/ContactForm';
import authSwitch from 'duck/auth/operations';

const mapDispatchToProps = dispatch => ({
  onSignUp: userData => {
    dispatch(authSwitch({ method: 'signup', userData: userData }));
  },
  onLogIn: userData => {
    dispatch(authSwitch({ method: 'login', userData: userData }));
  },
});

export default connect(null, mapDispatchToProps)(ContactForm);
