import * as actionTypes from 'duck/auth/actionTypes';

const initState = {
  userName: '',
  userEmail: '',
  userPassword: '',
  authError: '',
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        authError: null,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        authError: null,
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        authError: null,
      };
    default:
      return state;
  }
};

export default authReducer;

// export const authStart = () => {
//   return { type: actionTypes.AUTH_START };
// };

// export const authSuccess = response => {
//   return { type: actionTypes.AUTH_SUCCESS, payload: response };
// };

// export const authFail = response => {
//   return { type: actionTypes.AUTH_FAIL, payload: response };
// };

// export const authAction = ({ payload }) => {
//   return (dispatch, getFirebase) => {
//     switch (payload.method) {
//       case 'signup':
//         return (
//           dispatch(authStart()),
//           console.log(payload),
//           getFirebase()
//             .auth()
//             .createUserWithEmailAndPassword(payload.email, payload.password)
//             .then(res => {
//               const uid = getFirebase().auth().currentUser.uid;
//               getFirebase()
//                 .firestore()
//                 .collection('users')
//                 .doc(res.user.uid)
//                 .set({ name: payload.name })
//                 .catch(err => dispatch(authFail(err)));
//             })
//         );
//       case 'login':
//         return (
//           dispatch(authStart()),
//           getFirebase()
//             .auth()
//             .signInWithEmailAndPassword(payload.email, payload.password)
//             .then(res => dispatch(authSuccess(res)))
//             .catch(err => dispatch(authFail(err)))
//         );
//       case 'logout':
//         return (
//           dispatch(authStart()),
//           getFirebase()
//             .auth()
//             .signOut()
//             .then(res => dispatch(authSuccess(res)))
//             .catch(err => dispatch(authFail(err)))
//         );
//       default:
//         console.log('default');
//     }
//   };
// };
