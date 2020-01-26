import { connect } from 'react-redux';
import LogIn from 'components/pages/LogIn';
import authSwitch from 'duck/auth/operations';

const mapStateToProps = state => ({
  authState: state.firebase.auth.uid !== undefined,
});

const mapDipatchToProps = dispatch => ({
  onLogIn: userData => {
    dispatch(authSwitch({ method: 'login', userData }));
  },
});

export default connect(mapStateToProps, mapDipatchToProps)(LogIn);
