import { connect } from 'react-redux';
import Library from 'components/Home/Library/Library';
import { librariesRequest, likesRequest } from 'duck/requestLibrary/operations';
import { bookLike } from 'duck/bookReview/operations';

const mapStateToProps = state => ({
  library: state.library.response.docs,
  listen: state.library.listen,
  isLoading: state.request.isLoading,
  uid: state.firebase.auth.uid,
  likes: state.library.likes,
});

const mapDispatchToProps = dispatch => ({
  onRequest: uid => {
    dispatch(librariesRequest());
    dispatch(likesRequest(uid));
  },
  onLike: (ISBN, title) => {
    dispatch(bookLike(ISBN, title));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Library);
