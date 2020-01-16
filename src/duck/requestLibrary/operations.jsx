// import { selectors as userSelectors } from 'duck/postRequest/selectors';
import * as action from 'duck/request/actions';
import { getFirebase } from 'react-redux-firebase';

export const librariesRequest = () => dispatch => {
  dispatch(action.requestStart());
  const booksRef = getFirebase()
    .firestore()
    .collection('books');
  booksRef
    .get()
    .then(querySnapshot => {
      dispatch(action.requestSuccess(querySnapshot));
    })
    .catch(error => {
      dispatch(action.requestFail(error));
    });
};

export const libraryRequest = ISBN => dispatch => {
  dispatch(action.requestStart());
  const bookRef = getFirebase()
    .firestore()
    .collection('books')
    .doc(ISBN);
  bookRef
    .get()
    .then(doc => {
      dispatch(action.requestSuccess(doc.data()));
    })
    .catch(error => {
      dispatch(action.requestFail(error));
    });
};

export default librariesRequest;

//  const books = querySnapshot.docs.map(doc => doc.data());
