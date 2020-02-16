import { connect } from 'react-redux';
import PostLibrary from 'components/templates/PostLibrary';
import { libraryRequest } from 'duck/library/operations';

const formatData = (state: any) => {
  return state.library.response.docs === undefined
    ? null
    : state.library.response.docs.map(
        (queryDocumentSnapshot: { data: () => void }) => {
          return queryDocumentSnapshot.data();
        },
      );
};

const mapStateToProps = (state: any) => ({
  uid: state.firebase.auth.uid,
  library: formatData(state),
  isLoading: state.library.isLoading,
  collations: {
    collationLikes: state.firebase.profile.likes,
    collationComments: state.firebase.profile.comments,
  },
});

const mapDispatchToProps = (dispatch: any) => ({
  onRequest: (category: string, filter: string) => {
    dispatch(libraryRequest(category, filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostLibrary);
