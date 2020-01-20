import * as action from 'duck/bookRegister/actions';
import { getFirebase } from 'react-redux-firebase';
import axios from 'axios';

export const bookRequest = ISBN => dispatch => {
  dispatch(action.bookRequestStart());

  const fetchData = async () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`;
    const response = await axios.get(url);
    dispatch(action.bookRequestSuccess(response));
  };
  fetchData().catch(error => {
    dispatch(action.bookRequestFail(error));
  });
};

export const bookRegister = book => dispatch => {
  const author = book.author[0];
  const today = new Date();
  const registerDate = `${today.getFullYear()}-${today.getMonth() +
    1}-${today.getDate()}`;
  dispatch(action.registerStart());

  const pushData = async () => {
    const bookRef = getFirebase()
      .firestore()
      .collection('books')
      .doc(book.ISBN);
    await bookRef.set({
      ISBN: book.ISBN,
      title: book.title,
      author: author,
      publishedDate: book.publishedDate,
      image: book.image,
      description: book.description,
      category: book.category,
      registerDate: registerDate,
      likesCount: 0,
      commentsCount: 0,
    });
    await dispatch(action.registerSuccess());
    await dispatch(action.clearBookData());
    dispatch(action.reloadPage());
  };
  pushData().catch(error => {
    dispatch(action.registerFail(error));
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
  dispatch(action.registerStart());

  const pushData = async () => {
    const userBorrowRef = getFirebase()
      .firestore()
      .collection('users')
      .doc(uid)
      .collection('borrow')
      .doc(ISBN);
    const response = await userBorrowRef.set({
      ISBN: ISBN,
      title: title,
      borrowDate: borrowDate,
      limitDate: limitDate,
    });
    dispatch(action.registerSuccess(response));
  };
  pushData().catch(error => {
    dispatch(action.registerFail(error));
  });
};

export const bookReturn = (ISBN, user) => dispatch => {
  const today = new Date();
  const returnDate = `${today.getFullYear()}-${today.getMonth() +
    1}-${today.getDate()}`;
  dispatch(action.registerStart());

  const pushData = async () => {
    const userBorrowRef = getFirebase()
      .Firestore()
      .collection('users')
      .doc(user)
      .collection('borrow')
      .doc(ISBN);
    const response = await userBorrowRef.update({
      returnDate: returnDate,
    });
    dispatch(action.registerSuccess(response));
  };
  pushData.catch(error => {
    dispatch(action.registerFail(error));
  });
};
