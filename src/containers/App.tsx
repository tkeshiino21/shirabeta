import { connect } from 'react-redux';
import App from 'App';

const mapStateToProps = (state: any) => ({
  authState: state.firebase.auth.uid !== undefined,
});

export default connect(mapStateToProps)(App);
