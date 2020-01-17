import * as action from 'duck/requestLibrary/actions';
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
  // EventListner to render likesCount instantly
  dispatch(action.eventListenStart());
  const likesRef = getFirebase()
    .firestore()
    .collection('books')
    .doc('likesCount');
  likesRef.onSnapshot(doc => {
    dispatch(action.eventListenSuccess(doc));
  });
  // .catch(error => {
  //   dispatch(action.eventListenFail(error));
  // });
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

export const myPageRequest = uid => dispatch => {
  dispatch(action.requestStart());
  const borrowRef = getFirebase()
    .firestore()
    .collection('users')
    .doc(uid)
    .collection('borrow');
  borrowRef
    .get()
    .then(doc => {
      dispatch(action.requestSuccess(doc));
    })
    .catch(error => {
      dispatch(action.requestFail(error));
    });
};

export const likesRequest = uid => dispatch => {
  dispatch(action.collationStart());
  const fetchResourse = async () => {
    const likesRef = getFirebase()
      .firestore()
      .collection('users')
      .doc(uid);
    const likesDoc = await likesRef.get();
    if (likesDoc.exists) {
      return likesDoc.get('likes');
    } else {
      console.log('No such document!');
    }
  };
  fetchResourse()
    .then(doc => {
      dispatch(action.collationSuccess(doc));
    })
    .catch(error => {
      dispatch(action.collationFail(error));
    });
};
