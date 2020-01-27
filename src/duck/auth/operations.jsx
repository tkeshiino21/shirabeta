import { getFirebase } from 'react-redux-firebase';
import * as action from './actions';

// When user push LogIn, SignUp or LogOut button, authAction runs
const authSwitch = ({ method, userData }) => dispatch => {
  switch (method) {
    case 'signup':
      return (
        dispatch(action.authStart()),
        getFirebase()
          .auth()
          .createUserWithEmailAndPassword(userData.email, userData.password)
          .then(res => {
            dispatch(action.authSuccess(res));
            getFirebase()
              .firestore()
              .collection('users')
              .doc(res.user.uid)
              .set({ name: userData.name, likes: [], comments: [] })
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
      return dispatch(action.authFail('unpredictable errors occur'));
  }
};

export default authSwitch;
