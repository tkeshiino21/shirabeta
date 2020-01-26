import { connect } from 'react-redux';
import SignUp from 'components/pages/SignUp';
import authSwitch from 'duck/auth/operations';

const mapStateToProps = state => ({
  authState: state.firebase.auth.uid !== undefined,
});

const mapDipatchToProps = dispatch => ({
  onSignUp: userData => {
    dispatch(authSwitch({ method: 'signup', userData }));
  },
});

export default connect(mapStateToProps, mapDipatchToProps)(SignUp);
