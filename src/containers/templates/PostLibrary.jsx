import { connect } from 'react-redux';
import PostLibrary from 'components/templates/PostLibrary';
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
  collations: {
    collationLikes: state.firebase.profile.likes,
    collationComments: state.firebase.profile.comments,
  },
});

const mapDispatchToProps = dispatch => ({
  onRequest: (category, filter) => {
    dispatch(libraryRequest(category, filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostLibrary);
