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
        const querySnapshot = await booksRef.get();
        await dispatch(action.libraryRequestSuccess(querySnapshot));
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
        const querySnapshot = await booksRef.get();
        await dispatch(action.libraryRequestSuccess(querySnapshot));
      };
      requestBorrowAble().catch(error => {
        dispatch(action.libraryRequestFail(error));
      });
  }
};

// export const libraryRequest = order => dispatch => {
//   // EventListner to render likesCount instantly
//   dispatch(action.libraryRequestStart());
//   const requestLibraryData = async () => {
//     const booksRef = getFirebase()
//       .firestore()
//       .collection('books')
//       .where('category', '==', 'インフラ');
//     const querySnapshot = await booksRef.get();
//     await dispatch(action.libraryRequestSuccess(querySnapshot));
//   };
//   requestLibraryData().catch(error => {
//     dispatch(action.libraryRequestFail(error));
//   });
// };
