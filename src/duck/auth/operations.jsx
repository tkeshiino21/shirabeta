import { getFirebase } from 'react-redux-firebase';
import * as action from './actions';

const authSwitch = ({ method, userData }) => dispatch => {
  switch (method) {
    case 'signup':
      return (
        dispatch(action.authStart()),
        console.log('operations:', userData),
        getFirebase()
          .auth()
          .createUserWithEmailAndPassword(userData.email, userData.password)
          .then(res => {
            dispatch(action.authSuccess(res));
            const uid = getFirebase().auth().currentUser.uid;
            getFirebase()
              .firestore()
              .collection('users')
              .doc(res.user.uid)
              .set({ name: userData.name })
              .catch(err => dispatch(action.authFail(err)));
          })
      );
    case 'login':
      return (
        dispatch(action.authStart()),
        getFirebase()
          .auth()
          .signInWithEmailAndPassword(userData.email, userData.password)
          .then(res => dispatch(action.authSuccess(res)))
          .catch(err => dispatch(action.authFail(err)))
      );
    case 'logout':
      return (
        dispatch(action.authStart()),
        getFirebase()
          .auth()
          .signOut()
          .then(res => dispatch(action.authSuccess(res)))
          .catch(err => dispatch(action.authFail(err)))
      );
    default:
      return console.log('err!');
  }
};

export default authSwitch;
