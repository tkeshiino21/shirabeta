import { connect } from 'react-redux';
import LibraryTemplate from 'components/templates/LibraryTemplate';
import { libraryRequest, likesRequest } from 'duck/library/operations';

const formatData = state => {
  return state.library.response.docs === undefined
    ? null
    : state.library.response.docs.map(queryDocumentSnapshot => {
        return queryDocumentSnapshot.data();
      });
};

const mapStateToProps = state => ({
  library: formatData(state),
  listen: state.library.listen === '' ? null : state.library.listen,
  isLoading: state.library.isLoading,
  uid: state.firebase.auth.uid,
  likes: state.library.likes,
});

const mapDispatchToProps = dispatch => ({
  onRequest: () => {
    dispatch(libraryRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LibraryTemplate);
