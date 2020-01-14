import { connect } from 'react-redux';
import Library from 'components/Home/Library/Library';
import libraryRequest from 'duck/requestLibrary/operations';

// const mapStateToProps = state => ({
//   bookLibrary: state.fireStore,
// });

const mapStateToProps = state => ({
  library: state.library,
  isLoading: state.request.isLoading,
});

const mapDispatchToProps = dispatch => ({
  onRequest: () => {
    dispatch(libraryRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Library);
