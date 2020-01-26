import * as action from 'duck/library/actions';
import { getFirebase } from 'react-redux-firebase';

export const libraryRequest = (category, filter) => dispatch => {
  switch (filter) {
    case 'すべて':
      dispatch(action.libraryRequestStart());
      const requestLibraryData = async () => {
        const booksRef =
          category === 'すべて'
            ? getFirebase()
                .firestore()
                .collection('books')
                .orderBy('registerDate', 'desc')
            : getFirebase()
                .firestore()
                .collection('books')
                .where('category', '==', category)
                .orderBy('registerDate', 'desc');
        const doc = await booksRef.get();
        await dispatch(action.libraryRequestSuccess(doc));
      };
      requestLibraryData().catch(error => {
        dispatch(action.libraryRequestFail(error));
      });
      break;
    case '貸出可能のみ':
      dispatch(action.libraryRequestStart());
      const requestBorrowAble = async () => {
        const booksRef =
          category === 'すべて'
            ? getFirebase()
                .firestore()
                .collection('books')
                .where('borrowing', '==', false)
                .orderBy('registerDate', 'desc')
            : getFirebase()
                .firestore()
                .collection('books')
                .where('category', '==', category)
                .where('borrowing', '==', false)
                .orderBy('registerDate', 'desc');
        const doc = await booksRef.get();
        await dispatch(action.libraryRequestSuccess(doc));
      };
      requestBorrowAble().catch(error => {
        dispatch(action.libraryRequestFail(error));
      });
      break;
    default:
      dispatch(action.libraryRequestFail('unpredictable error occur'));
  }
};
