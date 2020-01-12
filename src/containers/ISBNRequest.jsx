import { connect } from 'react-redux';
import ISBNRequest from 'components/AddBook/ISBNRequest';
import bookRequest from 'duck/bookRequest/operations';
import getFormatData from 'duck/bookRequest/selectors';

const mapStateToProps = state => {
  return {
    fetchedBook: getFormatData(state),
    isLoading: state.post.isLoading,
  };
};

const mapDispatchToProps = dispatch => ({
  onRequest: ISBN => {
    dispatch(bookRequest(ISBN));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ISBNRequest);
