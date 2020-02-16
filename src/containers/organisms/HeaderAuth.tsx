import { connect } from 'react-redux';
import HeaderAuth from 'components/organisms/HeaderAuth';
import authSwitch from 'duck/auth/operations';

const mapStateToProps = (state: any) => ({
  authState: state.firebase.auth.uid !== undefined,
  userName: state.firebase.profile.name,
});

const userData = {
  email: '',
  password: '',
};

const mapDipatchToProps = (dispatch: any) => ({
  onLogOut: () => {
    dispatch(authSwitch('logout', userData));
  },
});

export default connect(mapStateToProps, mapDipatchToProps)(HeaderAuth);
