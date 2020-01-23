import { getFirebase } from 'react-redux-firebase';
import * as action from 'duck/myPage/actions';

export const myPageRequest = uid => dispatch => {
  dispatch(action.myPageRequestStart());
  const fetchResourse = async () => {
    const borrowRef = getFirebase()
      .firestore()
      .collection('users')
      .doc(uid)
      .collection('borrow');
    const doc = await borrowRef.get();
    dispatch(action.myPageRequestSuccess(doc));
  };
  fetchResourse().catch(error => {
    dispatch(action.myPageRequestFail(error));
  });
};
