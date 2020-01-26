import * as action from 'duck/libraryDetail/actions';
import { getFirebase } from 'react-redux-firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

export const libraryDetailRequest = (ISBN, uid) => dispatch => {
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
      uid: uid,
      userName: userName,
      ISBN: ISBN,
      title: title,
      commentDate: commentDate,
      comment: comment,
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
    dispatch(action.commentIncStart());
    const bookCommentsRef = getFirebase()
      .firestore()
      .collection('books')
      .doc(ISBN);
    await bookCommentsRef.update({
      commentsCount: firebase.firestore.FieldValue.increment(1),
    });
    await dispatch(action.commentIncSuccess());
    const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));
    await sleep(1000);
    await dispatch(action.clearState());
  };
  commentsIncrement().catch(error => {
    dispatch(action.commentIncFail(error));
  });
};

export const bookLike = (ISBN, uid) => dispatch => {
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
    dispatch(action.likeIncSuccess());
    const bookLikesRef = getFirebase()
      .firestore()
      .collection('books')
      .doc(ISBN);
    await bookLikesRef.update({
      likesCount: firebase.firestore.FieldValue.increment(1),
    });
    await dispatch(action.likeIncSuccess());
  };
  likesIncrement().catch(error => {
    dispatch(action.likeIncFail(error));
  });
};

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
      ISBN: ISBN,
      title: title,
      borrowDate: borrowDate,
      limitDate: limitDate,
      returnDate: '',
    });
    await bookRef.update({ borrowing: true });
    await dispatch(action.borrowSuccess(response));
  };
  pushData().catch(error => {
    dispatch(action.borrowFail(error));
  });
};
