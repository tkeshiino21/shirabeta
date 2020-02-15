import { connect } from 'react-redux';
import SignUp from 'components/pages/SignUp';
import authSwitch from 'duck/auth/operations';

const mapStateToProps = (state: any) => ({
  authState: state.firebase.auth.uid !== undefined,
});

const mapDipatchToProps = (dispatch: any) => ({
  onSignUp: (userData: any) => {
    dispatch(authSwitch('signup', userData));
  },
});

export default connect(mapStateToProps, mapDipatchToProps)(SignUp);
