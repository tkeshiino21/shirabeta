import { getFirebase } from 'react-redux-firebase';
import { Dispatch } from 'redux';
import * as action from './actions';

// When user push LogIn, SignUp or LogOut button, authAction runs

const authSwitch = (
  method: string,
  userData: { email: string; password: string; name?: string },
) => (dispatch: Dispatch) => {
  switch (method) {
    case 'signup':
      return (
        dispatch(action.authStart()),
        getFirebase()
          .auth()
          .createUserWithEmailAndPassword(userData.email, userData.password)
          .then((res: any) => {
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
          .then((response: any) => dispatch(action.authSuccess(response)))
          .catch((error: object) => dispatch(action.authFail(error)))
      );
    default:
      return dispatch(
        action.authFail({ message: 'unpredictable errors occur' }),
      );
  }
};

export default authSwitch;
