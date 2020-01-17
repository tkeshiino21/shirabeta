import * as action from 'duck/bookAdd/actions';
import { getFirebase } from 'react-redux-firebase';

export const bookAdd = book => dispatch => {
  dispatch(action.bookAddStart());
  const firebase = getFirebase();
  const author = book.author[0];
  const today = new Date();
  const registerDate = `${today.getFullYear()}-${today.getMonth() +
    1}-${today.getDate()}`;
  const addingData = firebase
    .firestore()
    .collection('books')
    .doc(book.ISBN)
    .set({
      ISBN: book.ISBN,
      title: book.title,
      author: author,
      publishedDate: book.publishedDate,
      registerDate: registerDate,
      // firebase.firestore.FieldValue.serverTimestamp()
    });
  addingData.then(response => {
    dispatch(action.bookAddSuccess(response));
    console.log(response);
  });
};

export const bookBorrow = (ISBN, title, uid) => dispatch => {
  dispatch(action.bookAddStart());
  const firebase = getFirebase();
  const today = new Date();
  const todayCopy = new Date();
  const limitDay = new Date(todayCopy.setDate(todayCopy.getDate() + 14));
  const borrowDate = `${today.getFullYear()}-${today.getMonth() +
    1}-${today.getDate()}`;
  const limitDate = `${limitDay.getFullYear()}-${limitDay.getMonth() +
    1}-${limitDay.getDate()}`;
  console.log(limitDay, today);
  const addingData = firebase
    .firestore()
    .collection('users')
    .doc(uid)
    .collection('borrow')
    .doc(ISBN)
    .set({
      ISBN: ISBN,
      title: title,
      borrowDate: borrowDate,
      limitDate: limitDate,
      likesCount: 0,
      commentsCount: 0,
    });
  addingData.then(response => {
    dispatch(action.bookAddSuccess(response));
    console.log(response);
  });
};

export const bookReturn = (ISBN, user) => dispatch => {
  console.log('ISBN', ISBN, 'user', user);
  dispatch(action.bookAddStart());
  const firebase = getFirebase();
  const today = new Date();
  const returnDate = `${today.getFullYear()}-${today.getMonth() +
    1}-${today.getDate()}`;
  const addingData = firebase
    .firestore()
    .collection('users')
    .doc(user)
    .collection('borrow')
    .doc(ISBN)
    .update({
      returnDate: returnDate,
    });
  addingData.then(response => {
    dispatch(action.bookAddSuccess(response));
    console.log(response);
  });
};

export default bookAdd;
