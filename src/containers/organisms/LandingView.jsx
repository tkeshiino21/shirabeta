import { connect } from 'react-redux';
import LandingView from 'components/organisms/LandingView';

const mapStateToProps = state => ({
  authState: state.firebase.auth.uid !== undefined,
});

export default connect(mapStateToProps)(LandingView);
