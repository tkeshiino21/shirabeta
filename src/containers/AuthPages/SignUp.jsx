import { connect } from 'react-redux';
import SignUp from 'components/AuthPages/SignUp';
import authSwitch from 'duck/auth/operations';

const mapStateToProps = state => ({
  authState: state.firebase.auth.uid === undefined ? false : true,
});

const mapDipatchToProps = dispatch => ({
  onSignUp: userData => {
    dispatch(authSwitch({ method: 'signup', userData: userData }));
  },
});

export default connect(mapStateToProps, mapDipatchToProps)(SignUp);
