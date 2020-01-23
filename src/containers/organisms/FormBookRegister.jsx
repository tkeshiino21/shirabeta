import { connect } from 'react-redux';
import FormBookRegister from 'components/templates/FormBookRegister';
import { bookRegister } from 'duck/bookRegister/operations';

const mapDispatchToProps = dispatch => ({
  onSubmit: book => {
    dispatch(bookRegister(book));
  },
});

export default connect(null, mapDispatchToProps)(FormBookRegister);
