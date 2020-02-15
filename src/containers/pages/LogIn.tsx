import { connect } from 'react-redux';
import LogIn from 'components/pages/LogIn';
import authSwitch from 'duck/auth/operations';

const mapStateToProps = (state: any) => ({
  authState: state.firebase.auth.uid !== undefined,
});

const mapDipatchToProps = (dispatch: any) => ({
  onLogIn: (userData: any) => {
    dispatch(authSwitch('login', userData));
  },
});

export default connect(mapStateToProps, mapDipatchToProps)(LogIn);
