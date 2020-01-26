import LandingView from 'components//organisms/LandingView';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  authState: state.firebase.auth.uid === undefined ? false : true,
});

export default connect(mapStateToProps)(LandingView);
