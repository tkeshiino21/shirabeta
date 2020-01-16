import { connect } from 'react-redux';
import App from 'App';

const mapStateToProps = state => ({
  authState: state.firebase.auth.uid === undefined ? false : true,
  userName: state.firebase.profile.name,
});

export default connect(mapStateToProps)(App);
