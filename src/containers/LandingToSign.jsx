import LandingToSignComponent from 'components/Home/LandingToSign';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  authState: state.firebase.uid === undefined ? false : true,
});

export default connect(mapStateToProps)(LandingToSignComponent);
