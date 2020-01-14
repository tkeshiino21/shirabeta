// import { selectors as userSelectors } from 'duck/postRequest/selectors';
import axios from 'axios';
import * as action from 'duck/request/actions';
import { getFirebase } from 'react-redux-firebase';

const libraryRequest = () => dispatch => {
  dispatch(action.requestStart());
  const firebase = getFirebase();
  const fetchData = async () => {
    firebase
      .firestore()
      .collection('blogs')
      .where('type', 'in', ['tweet', 'podcast'])
      .get();
  };
  fetchData()
    .then(data => {
      dispatch(action.requestSuccess(data));
    })
    .catch(error => {
      dispatch(action.requestFail(error));
    });
};

export default libraryRequest;
