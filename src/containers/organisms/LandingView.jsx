import { connect } from 'react-redux';
import LandingView from 'components/organisms/LandingView';

const mapStateToProps = state => ({
  authState: state.firebase.auth.uid === undefined ? false : true,
});

export default connect(mapStateToProps)(LandingView);
