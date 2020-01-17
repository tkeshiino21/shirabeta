import * as action from 'duck/bookAdd/actions';
import { getFirebase } from 'react-redux-firebase';

export const bookComment = (ISBN, title, uid, comment) => dispatch => {
  dispatch(action.bookAddStart());
  const firebase = getFirebase();
  const today = new Date();
  const commentDate = `${today.getFullYear()}-${today.getMonth() +
    1}-${today.getDate()}`;
  const addingData = firebase
    .firestore()
    .collection('users')
    .doc(uid)
    .collection('comments')
    .doc(ISBN)
    .set({
      ISBN: ISBN,
      title: title,
      commentDate: commentDate,
      comment: comment,
    });
  const addingBookData = firebase
    .firestore()
    .collection('books')
    .doc(ISBN)
    .update({
      commentsCount: firebase.firestore.FieldValue.increment(1),
    });
  addingData.then(response => {
    dispatch(action.bookAddSuccess(response));
    console.log(response);
  });
  addingBookData.then(response => {
    dispatch(action.bookAddSuccess(response));
    console.log(response);
  });
};

export const bookLike = (ISBN, uid) => dispatch => {
  dispatch(action.bookAddStart());
  const firebase = getFirebase();
  const addingData = firebase
    .firestore()
    .collection('users')
    .doc(uid)
    .update({
      likes: firebase.firestore.FieldValue.arrayUnion('ISBN'),
    });
  const addingBookData = firebase
    .firestore()
    .collection('books')
    .doc(ISBN)
    .update({
      likesCount: firebase.firestore.FieldValue.increment(1),
    });
  addingData.then(response => {
    dispatch(action.bookAddSuccess(response));
    console.log(response);
  });
  addingBookData.then(response => {
    dispatch(action.bookAddSuccess(response));
    console.log(response);
  });
};
