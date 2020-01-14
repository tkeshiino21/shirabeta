import { connect } from 'react-redux';
import DirectInputForm from 'components/AddBook/AddForm';
import bookAdd from 'duck/bookAdd/operations';

const mapDispatchToProps = dispatch => ({
  onSumit: book => {
    dispatch(bookAdd(book));
  },
});

export default connect(null, mapDispatchToProps)(DirectInputForm);
