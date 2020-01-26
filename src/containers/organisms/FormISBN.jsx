import { connect } from 'react-redux';
import FormISBN from 'components/organisms/FormISBN';
import { bookRegister } from 'duck/bookRegister/operations';
import { bookRequest } from 'duck/bookRegister/operations';

const mapStateToProps = state => {
  return {
    error: state.register.error,
    showSnack: false,
  };
};

const mapDispatchToProps = dispatch => ({
  ISBNSearch: ISBN => {
    dispatch(bookRequest(ISBN));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormISBN);
