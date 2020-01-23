import { connect } from 'react-redux';
import PostLibrary from 'components/organisms/PostLibrary';
import { libraryRequest } from 'duck/library/operations';

const formatData = state => {
  return state.library.response.docs === undefined
    ? null
    : state.library.response.docs.map(queryDocumentSnapshot => {
        return queryDocumentSnapshot.data();
      });
};

const mapStateToProps = state => ({
  uid: state.firebase.auth.uid,
  library: formatData(state),
  isLoading: state.library.isLoading,
});

const mapDispatchToProps = dispatch => ({
  onRequest: uid => {
    dispatch(libraryRequest(uid));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostLibrary);
