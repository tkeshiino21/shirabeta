import * as action from 'duck/bookRegister/actions';
import { getFirebase } from 'react-redux-firebase';
import axios from 'axios';

export const bookRequest = ISBN => dispatch => {
  dispatch(action.bookRequestStart());
  const fetchData = async () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`;
    const response = await axios.get(url);
    await dispatch(action.bookRequestSuccess(response, ISBN));
  };
  fetchData().catch(error => {
    dispatch(action.bookRequestFail(error));
  });
};

export const bookRegister = book => dispatch => {
  console.log(book.author);
  const author =
    Array.isArray(book.author) === true ? book.author[0] : [book.author];
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
    const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));
    await sleep(1000);
    await dispatch(action.reloadPage());
  };
  pushData().catch(error => {
    dispatch(action.registerFail(error));
  });
};
