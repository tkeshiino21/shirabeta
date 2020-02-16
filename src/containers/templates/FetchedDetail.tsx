import { connect } from 'react-redux';
import FetchedDetail from 'components/templates/FetchedDetail';
import {
  libraryDetailRequest,
  bookBorrow,
  bookComment,
  bookLike,
} from 'duck/libraryDetail/operations';

const formatData = (state: any) => {
  return state.libraryDetail.likes.docs === undefined
    ? null
    : state.libraryDetail.likes.docs.map(
        (queryDocumentSnapshot: { data: () => void }) => {
          return queryDocumentSnapshot.data();
        },
      );
};

const collation = (state: any) => {
  const collationLikes = state.firebase.profile.likes;
  const collationComments = state.firebase.profile.comments;
  const ISBN = state.libraryDetail.response.ISBN;
  if (
    collationLikes === undefined ||
    collationLikes === undefined ||
    ISBN === undefined
  ) {
    return {
      myLikes: false,
      myComments: false,
    };
  } else {
    return {
      myLikes: collationLikes.includes(ISBN),
      myComments: collationComments.includes(ISBN),
    };
  }
};

const mapStateToProps = (state: any) => ({
  fetchedDetail: state.libraryDetail.response,
  comments: formatData(state),
  isLoading: state.libraryDetail.isLoading,
  isAdding: state.libraryDetail.isAdding,
  showSnack: state.libraryDetail.showSnack,
  userData: {
    uid: state.firebase.auth.uid,
    userName: state.firebase.profile.name,
  },
  collation: collation(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  onRequest: (ISBN: string) => {
    dispatch(libraryDetailRequest(ISBN));
  },
  onBorrow: (ISBN: string, title: string, uid: string) => {
    dispatch(bookBorrow(ISBN, title, uid));
  },
  onComment: (
    ISBN: string,
    title: string,
    uid: string,
    userName: string,
    comment: string,
  ) => {
    dispatch(bookComment(ISBN, title, uid, userName, comment));
  },
  onLike: (ISBN: string, uid: string, method: string) => {
    dispatch(bookLike(ISBN, uid, method));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FetchedDetail);
