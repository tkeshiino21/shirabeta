import * as action from 'duck/library/actions';
import { getFirebase } from 'react-redux-firebase';

export const libraryRequest = uid => dispatch => {
  // EventListner to render likesCount instantly
  dispatch(action.libraryRequestStart());
  const requestLibraryData = async () => {
    const booksRef = getFirebase()
      .firestore()
      .collection('books');
    const querySnapshot = await booksRef.get();
    await dispatch(action.libraryRequestSuccess(querySnapshot));
    console.log(querySnapshot);
  };
  requestLibraryData().catch(error => {
    dispatch(action.libraryRequestFail(error));
  });
  // EventListner to render likesCount instantly
  dispatch(action.collationStart());
  const likesRequest = async () => {
    const likesRef = getFirebase()
      .firestore()
      .collection('users')
      .doc(uid);
    const doc = await likesRef.get();
    dispatch(action.collationSuccess(doc));
  };
  likesRequest().catch(error => {
    dispatch(action.collationFail(error));
  });
};
