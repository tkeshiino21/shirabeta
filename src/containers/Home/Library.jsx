import { connect } from 'react-redux';
import Library from 'components/pages/Library';
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
  // onLikesRequest: uid => {
  //   dispatch(likesRequest(uid));
  //   console.log('mapd', uid);
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(Library);
