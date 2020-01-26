import { getFirebase } from 'react-redux-firebase';
import * as action from 'duck/myPage/actions';

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

export const bookReturn = (ISBN, uid) => dispatch => {
  console.log(ISBN, uid);
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
      returnDate: returnDate,
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
