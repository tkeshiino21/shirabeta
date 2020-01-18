import { connect } from 'react-redux';
import Library from 'components/Home/Library/Library';
import { librariesRequest, likesRequest } from 'duck/requestLibrary/operations';
import { bookLike } from 'duck/bookReview/operations';

const formatData = state => {
  return state.library.response.docs === undefined
    ? null
    : state.library.response.docs.map(queryDocumentSnapshot => {
        return queryDocumentSnapshot.data();
      });
};

const formattingData = state => {
  return state.library.listen === undefined
    ? null
    : state.library.listen.map(queryDocumentSnapshot => {
        return queryDocumentSnapshot.data();
      });
};

const mapStateToProps = state => ({
  library: formatData(state),
  listen: state.library.listen === '' ? null : state.library.listen,
  isLoading: state.request.isLoading,
  uid: state.firebase.auth.uid,
  likes: state.library.likes,
});

const mapDispatchToProps = dispatch => ({
  onRequest: () => {
    dispatch(librariesRequest());
  },
  onLikesRequest: uid => {
    dispatch(likesRequest(uid));
    console.log('mapd', uid);
  },
  onLike: (ISBN, uid) => {
    dispatch(bookLike(ISBN, uid));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Library);
