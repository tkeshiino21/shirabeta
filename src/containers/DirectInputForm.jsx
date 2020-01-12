import { connect } from 'react-redux';
import DirectInputForm from 'components/AddBook/DirectInputForm';
import getFormatData from 'duck/bookRequest/selectors';

const mapStateToProps = state => {
  return {
    fetchedBook: getFormatData(state),
    isLoading: state.post.isLoading,
  };
};

export default connect(mapStateToProps)(DirectInputForm);
