import { getFirebase } from 'react-redux-firebase';
import * as action from 'duck/qiita/actions';

export const myPageRequest = uid => dispatch => {
  dispatch(action.requestStart());
  const fetchResourse = async () => {
    const borrowRef = getFirebase()
      .firestore()
      .collection('users')
      .doc(uid)
      .collection('borrow');
    const doc = await borrowRef.get();
    dispatch(action.requestSuccess(doc));
  };
  fetchResourse().catch(error => {
    dispatch(action.requestFail(error));
  });
};
