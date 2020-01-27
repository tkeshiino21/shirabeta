import { getFirebase } from 'react-redux-firebase';
import * as action from 'duck/myPage/actions';

// when user visit myPage, myPageRequest runs
export const myPageRequest = uid => dispatch => {
  dispatch(action.myPageRequestStart());
  const borrowRef = getFirebase()
    .firestore()
    .collection('users')
    .doc(uid)
    .collection('borrow')
    .orderBy('borrowDate', 'desc');
  const fetchResourse = async () => {
    const documentSnapshot = await borrowRef.get();
    await dispatch(action.myPageRequestSuccess(documentSnapshot.docs));
  };
  fetchResourse().catch(error => {
    dispatch(action.myPageRequestFail(error));
  });
};

// when user push "返却" button, return runs
export const bookReturn = (ISBN, uid) => dispatch => {
  const today = new Date();
  const returnDate = `${today.getFullYear()}-${today.getMonth() +
    1}-${today.getDate()}`;
  dispatch(action.returnStart());

  const pushData = async () => {
    const userBorrowRef = getFirebase()
      .firestore()
      .collection('users')
      .doc(uid)
      .collection('borrow')
      .doc(ISBN);
    const bookRef = getFirebase()
      .firestore()
      .collection('books')
      .doc(ISBN);
    const response = await userBorrowRef.update({
      returnDate,
      borrowing: false,
    });
    await bookRef.update({ borrowing: false });
    await dispatch(action.returnSuccess(response));
    await dispatch(myPageRequest(uid));
  };
  pushData()
    .then()
    .catch(error => {
      dispatch(action.returnFail(error));
    });
};

// for Fetching user's comments data
export const userComments = uid => dispatch => {
  dispatch(action.userCommentsStart());
  const commentsRef = getFirebase()
    .firestore()
    .collection('users')
    .doc(uid)
    .collection('comments');
  const fetchResourse = async () => {
    const documentSnapshot = await commentsRef.get();
    await dispatch(action.userCommentsSuccess(documentSnapshot.docs));
  };
  fetchResourse().catch(error => {
    dispatch(action.userCommentsFail(error));
  });
};

// for Fetching user's likes data
export const userLikes = ISBNS => dispatch => {
  dispatch(action.userLikesStart());
  const bookRef = getFirebase()
    .firestore()
    .collection('books')
    .where('ISBN', 'in', ISBNS);
  const fetchResourse = async () => {
    const documentSnapshot = await bookRef.get();
    await dispatch(action.userLikesSuccess(documentSnapshot.docs));
  };
  fetchResourse().catch(error => {
    dispatch(action.userLikesFail(error));
  });
};
