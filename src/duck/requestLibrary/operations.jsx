// import { selectors as userSelectors } from 'duck/postRequest/selectors';
import axios from 'axios';
import * as action from 'duck/request/actions';
import { getFirebase } from 'react-redux-firebase';

const libraryRequest = () => dispatch => {
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

export default libraryRequest;

//  const books = querySnapshot.docs.map(doc => doc.data());
