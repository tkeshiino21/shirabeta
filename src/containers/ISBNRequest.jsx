import { connect } from 'react-redux';
import ISBNRequest from 'components/AddBook/ISBNRequest';
import bookRequest from 'duck/requestBook/operations';
import getFormatData from 'duck/requestBook/selectors';

const mapStateToProps = state => {
  return {
    fetchedBook: getFormatData(state),
    isLoading: state.request.isLoading,
  };
};

const mapDispatchToProps = dispatch => ({
  onRequest: ISBN => {
    dispatch(bookRequest(ISBN));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ISBNRequest);
