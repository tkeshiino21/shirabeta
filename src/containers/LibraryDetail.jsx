import { connect } from 'react-redux';
import LibraryDetail from 'components/Home/Library/LibraryDetail/LibraryDetail';
import { libraryRequest } from 'duck/requestLibrary/operations';

const mapStateToProps = state => ({
  library: state.library.response,
  isLoading: state.request.isLoading,
});

const mapDispatchToProps = dispatch => ({
  onRequest: ISBN => {
    dispatch(libraryRequest(ISBN));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LibraryDetail);
