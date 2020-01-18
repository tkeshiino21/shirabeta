import * as action from 'duck/bookAdd/actions';
import { getFirebase } from 'react-redux-firebase';

export const bookComment = (
  ISBN,
  title,
  uid,
  userName,
  comment,
) => dispatch => {
  console.log('data', ISBN, title, uid, comment);
  dispatch(action.bookAddStart());
  const firebase = getFirebase();
  const today = new Date();
  const commentDate = `${today.getFullYear()}-${today.getMonth() +
    1}-${today.getDate()}`;
  const userComments = firebase
    .firestore()
    .collection('users')
    .doc(uid)
    .collection('comments')
    .doc(ISBN)
    .set({
      uid: uid,
      userName: userName,
      ISBN: ISBN,
      title: title,
      commentDate: commentDate,
      comment: comment,
    });
  const bookIncrement = firebase
    .firestore()
    .collection('books')
    .doc(ISBN)
    .update({
      commentsCount: firebase.firestore.FieldValue.increment(1),
    });
  userComments.then(response => {
    dispatch(action.bookAddSuccess(response));
    console.log(response);
  });
  bookIncrement.then(response => {
    dispatch(action.bookAddSuccess(response));
    console.log(response);
  });
};

export const bookLike = (ISBN, uid) => dispatch => {
  console.log(ISBN, uid, 'it');
  dispatch(action.bookAddStart());
  const firebase = getFirebase();
  const userLikes = firebase
    .firestore()
    .collection('users')
    .doc(uid)
    .update({
      likes: firebase.firestore.FieldValue.arrayUnion(ISBN),
    });
  const bookIncrement = firebase
    .firestore()
    .collection('books')
    .doc(ISBN)
    .update({
      likesCount: firebase.firestore.FieldValue.increment(1),
    });
  userLikes.then(response => {
    dispatch(action.bookAddSuccess(response));
    console.log(response);
  });
  bookIncrement.then(response => {
    dispatch(action.bookAddSuccess(response));
    console.log(response);
  });
};
