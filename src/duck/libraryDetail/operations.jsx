import * as action from 'duck/libraryDetail/actions';
import { getFirebase } from 'react-redux-firebase';

export const libraryDetailRequest = ISBN => dispatch => {
  dispatch(action.detailRequestStart());
  const fetchResourse = async () => {
    const bookRef = getFirebase()
      .firestore()
      .collection('books')
      .doc(ISBN);
    const doc = await bookRef.get();
    dispatch(action.detailRequestSuccess(doc.data()));
  };
  fetchResourse().catch(error => {
    dispatch(action.detailRequestFail(error));
  });
  // EventListner to render likesCount instantly
  dispatch(action.countListenStart());
  const likesCountListen = async () => {
    const likesRef = getFirebase()
      .firestore()
      .collection('books')
      .doc('likesCount');
    const doc = await likesRef.onSnapshot;
    dispatch(action.countListenSuccess(doc.data()));
  };
  likesCountListen.catch(error => {
    dispatch(action.detailRequestFail(error));
  });
};

export const commentsRequest = ISBN => dispatch => {
  dispatch(action.collationStart());
  const fetchResourse = async () => {
    const snapshotRef = getFirebase()
      .firestore()
      .collectionGroup('comments')
      .where('ISBN', '==', ISBN);
    const snapshot = await snapshotRef.get();
    dispatch(action.collationSuccess(snapshot));
  };
  fetchResourse().catch(error => {
    dispatch(action.collationFail(error));
  });
};

export const bookComment = (
  ISBN,
  title,
  uid,
  userName,
  comment,
) => dispatch => {
  dispatch(action.commentAddStart());
  const today = new Date();
  const commentDate = `${today.getFullYear()}-${today.getMonth() +
    1}-${today.getDate()}`;

  const pushUserData = async () => {
    const userCommentsRef = getFirebase()
      .firestore()
      .collection('users')
      .doc(uid)
      .collection('comments')
      .doc(ISBN);
    await userCommentsRef.set({
      uid: uid,
      userName: userName,
      ISBN: ISBN,
      title: title,
      commentDate: commentDate,
      comment: comment,
    });
    await dispatch(action.commentAddSuccess(response));
  };
  pushUserData().catch(error => dispatch.commentAddFail(error));
  const commentsIncrement = async () => {
    const bookCommentsRef = getFirebase()
      .firestore()
      .collection('books')
      .doc(ISBN);
    await bookCommentsRef.update({
      commentsCount: firebase.firestore.FieldValue.increment(1),
    });
    await dispatch(action.commentAddSuccess(response));
  };
  commentsIncrement().catch(error => {
    dispatch(action.commentAddFail(error));
  });
};

export const bookLike = (ISBN, uid) => dispatch => {
  dispatch(action.likeAddStart());
  const pushUserData = async () => {
    const userLikesRef = getFirebase()
      .firestore()
      .collection('users')
      .doc(uid);
    await userLikesRef.update({
      likes: firebase.firestore.FieldValue.arrayUnion(ISBN),
    });
    await dispatch(action.likeAddSuccess(response));
  };
  pushUserData().catch(error => {
    dispatch(action.likeAddFail(error));
  });
  const likesIncrement = async () => {
    const bookLikesRef = getFirebase()
      .firestore()
      .collection('books')
      .doc(ISBN);
    await bookLikesRef.update({
      likesCount: firebase.firestore.FieldValue.increment(1),
    });
    await dispatch(action.likeAddSuccess(response));
  };
  likesIncrement().catch(error => {
    dispatch(action.likeAddFail(error));
  });
};
