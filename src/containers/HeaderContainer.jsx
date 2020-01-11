import { connect } from 'react-redux';
import Header from 'Layout/Header';

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Header);
