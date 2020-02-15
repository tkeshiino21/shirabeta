import { connect } from 'react-redux';
import HeaderAuth from 'components/organisms/HeaderAuth';
import authSwitch from 'duck/auth/operations';

const mapStateToProps = (state: any) => ({
  authState: state.firebase.auth.uid !== undefined,
  userName: state.firebase.profile.name,
});

const mapDipatchToProps = (dispatch: any) => ({
  onLogOut: () => {
    dispatch(authSwitch('logout', null));
  },
});

export default connect(mapStateToProps, mapDipatchToProps)(HeaderAuth);
