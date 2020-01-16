import * as action from 'duck/bookAdd/actions';
import { getFirebase } from 'react-redux-firebase';

const bookAdd = book => dispatch => {
  // console.log('request', tagName);
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

export default bookAdd;
