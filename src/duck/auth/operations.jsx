import moduleName from '../users';

const requestArticle = ({ payload }) => {
  return (dispatch, getFirebase) => {
    switch (payload.method) {
      case 'signup':
        return (
          dispatch(authStart()),
          console.log(payload),
          getFirebase()
            .auth()
            .createUserWithEmailAndPassword(payload.email, payload.password)
            .then(res => {
              const uid = getFirebase().auth().currentUser.uid;
              getFirebase()
                .firestore()
                .collection('users')
                .doc(res.user.uid)
                .set({ name: payload.name })
                .catch(err => dispatch(authFail(err)));
            })
        );
      default:
        return state;
    }
  };
};
