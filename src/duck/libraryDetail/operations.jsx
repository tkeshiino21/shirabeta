import * as action from 'duck/libraryDetail/actions';
import { getFirebase } from 'react-redux-firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

// When page is loaded and, detailRequest runs.
export const libraryDetailRequest = ISBN => dispatch => {
  dispatch(action.detailRequestStart());
  const bookRef = getFirebase()
    .firestore()
    .collection('books')
    .doc(ISBN);
  const asyncFunc = async doc => {
    const data = await doc.data();
    await dispatch(action.detailRequestSuccess(data));
  };
  const fetcheResourse = async () => {
    await bookRef.onSnapshot(asyncFunc);
  };
  fetcheResourse().catch(error => {
    dispatch(action.detailRequestFail(error));
  });
};

// When page is loaded and user push "POST" button,  commentsRequest runs.
export const commentRequest = ISBN => dispatch => {
  dispatch(action.commentRequestStart());
  const fetchResourse = async () => {
    const snapshotRef = getFirebase()
      .firestore()
      .collectionGroup('comments')
      .where('ISBN', '==', ISBN);
    const snapshot = await snapshotRef.get();
    await dispatch(action.commentRequestSuccess(snapshot));
  };
  fetchResourse().catch(error => {
    dispatch(action.commentRequestFail(error));
  });
};

// When user push "BORROW" button, borrow runs.
export const bookBorrow = (ISBN, title, uid) => dispatch => {
  const today = new Date();
  const todayCopy = new Date();
  const limitDay = new Date(todayCopy.setDate(todayCopy.getDate() + 14));
  const borrowDate = `${today.getFullYear()}-${today.getMonth() +
    1}-${today.getDate()}`;
  const limitDate = `${limitDay.getFullYear()}-${limitDay.getMonth() +
    1}-${limitDay.getDate()}`;
  dispatch(action.borrowStart());

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
    const response = await userBorrowRef.set({
      ISBN,
      title,
      borrowDate,
      limitDate,
      returnDate: '',
    });
    await bookRef.update({ borrowing: true });
    await dispatch(action.borrowSuccess(response));
  };
  pushData().catch(error => {
    dispatch(action.borrowFail(error));
  });
};

// When user push "LIKES" button, firebase updates userData and bookData.
export const bookLike = (ISBN, uid, method) => dispatch => {
  switch (method) {
    case 'likeAdd':
      dispatch(action.likeAddStart());
      const pushUserData = async () => {
        const userLikesRef = getFirebase()
          .firestore()
          .collection('users')
          .doc(uid);
        await userLikesRef.update({
          likes: firebase.firestore.FieldValue.arrayUnion(ISBN),
        });
        await dispatch(action.likeAddSuccess());
      };
      pushUserData().catch(error => {
        dispatch(action.likeAddFail(error));
      });
      const likesIncrement = async () => {
        const bookLikesRef = getFirebase()
          .firestore()
          .collection('books')
          .doc(ISBN);
        await bookLikesRef.update({
          likesCount: firebase.firestore.FieldValue.increment(1),
        });
      };
      likesIncrement().catch(error => {
        dispatch(action.likeIncFail(error));
      });
      break;
    case 'likeRemove':
      dispatch(action.likeAddStart());
      const removeUserData = async () => {
        const userLikesRef = getFirebase()
          .firestore()
          .collection('users')
          .doc(uid);
        await userLikesRef.update({
          likes: firebase.firestore.FieldValue.arrayRemove(ISBN),
        });
        await dispatch(action.likeAddSuccess());
      };
      removeUserData().catch(error => {
        dispatch(action.likeAddFail(error));
      });
      const likesDecrement = async () => {
        const bookLikesRef = getFirebase()
          .firestore()
          .collection('books')
          .doc(ISBN);
        await bookLikesRef.update({
          likesCount: firebase.firestore.FieldValue.decrement(1),
        });
      };
      likesDecrement().catch(error => {
        dispatch(action.likeIncFail(error));
      });
      break;
    default:
      dispatch(action.likeAddFail('unpredictable errors occur'));
  }
};

// When user push "POST" button, firebase updates userData.
export const bookComment = (
  ISBN,
  title,
  uid,
  userName,
  comment,
) => dispatch => {
  dispatch(action.commentAddStart());
  const today = new Date();
  const commentDate = `${today.getFullYear()}-${today.getMonth() +
    1}-${today.getDate()}`;

  const pushUserData = async () => {
    const userCommentsRef = getFirebase()
      .firestore()
      .collection('users')
      .doc(uid)
      .collection('comments')
      .doc(ISBN);
    await userCommentsRef.set({
      uid,
      userName,
      ISBN,
      title,
      commentDate,
      comment,
    });
    const arrayCommentsRef = getFirebase()
      .firestore()
      .collection('users')
      .doc(uid);
    await arrayCommentsRef.update({
      comments: firebase.firestore.FieldValue.arrayUnion(ISBN),
    });
    await dispatch(action.commentAddSuccess());
  };
  pushUserData().catch(error => action.commentAddFail(error));
  const commentsIncrement = async () => {
    const bookCommentsRef = getFirebase()
      .firestore()
      .collection('books')
      .doc(ISBN);
    await bookCommentsRef.update({
      commentsCount: firebase.firestore.FieldValue.increment(1),
    });
    const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));
    await sleep(1000);
    // for Reloading Pages after submissiton of comment or like
    await dispatch(action.clearState());
  };
  commentsIncrement().catch(error => {
    dispatch(action.commentIncFail(error));
  });
};
