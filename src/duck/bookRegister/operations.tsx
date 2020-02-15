import * as action from 'duck/bookRegister/actions';
import { getFirebase } from 'react-redux-firebase';
import axios from 'axios';

// Request GoogleBooksAPI for book data
export const bookRequest = (ISBN: any) => (dispatch: any) => {
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

// Register fetched book data  with firestore
export const bookRegister = (book: any) => (dispatch: any) => {
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
      author,
      registerDate,
      ISBN: book.ISBN,
      title: book.title,
      publishedDate: book.publishedDate,
      image: book.image,
      description: book.description,
      category: book.category,
      borrowing: false,
      likesCount: 0,
      commentsCount: 0,
    });
    await dispatch(action.registerSuccess());
    // After Submition, clear fetched book data
    await dispatch(action.clearBookData());
    const sleep = (msec: any) =>
      new Promise(resolve => setTimeout(resolve, msec));
    await sleep(1000);
    await dispatch(action.reloadPage());
  };
  pushData().catch(error => {
    dispatch(action.registerFail(error));
  });
};
