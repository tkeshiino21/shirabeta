import { connect } from 'react-redux';
import Library from 'components/Home/Library/Library';
import { librariesRequest } from 'duck/requestLibrary/operations';

// const mapStateToProps = state => ({
//   bookLibrary: state.fireStore,
// });

const mapStateToProps = state => ({
  library: state.library.response.docs,
  isLoading: state.request.isLoading,
});

const mapDispatchToProps = dispatch => ({
  onRequest: () => {
    dispatch(librariesRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Library);
