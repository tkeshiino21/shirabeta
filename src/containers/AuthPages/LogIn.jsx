import { connect } from 'react-redux';
import LogIn from 'components/AuthPages/LogIn';
import authSwitch from 'duck/auth/operations';

const mapStateToProps = state => ({
  authState: state.firebase.auth.uid === undefined ? false : true,
});

const mapDipatchToProps = dispatch => ({
  onLogIn: userData => {
    dispatch(authSwitch({ method: 'login', userData: userData }));
  },
});

export default connect(mapStateToProps, mapDipatchToProps)(LogIn);
