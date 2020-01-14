// import { selectors as userSelectors } from 'duck/postRequest/selectors';
import axios from 'axios';
import * as action from 'duck/request/actions';

const bookRequest = ISBN => dispatch => {
  dispatch(action.requestStart());
  console.log('redux', ISBN);
  const fetchData = async () => {
    const baseURL = 'https://www.googleapis.com';
    const queryURL = `${baseURL}/books/v1/volumes?q=isbn:${ISBN}`;
    const data = await axios.get(queryURL);
    dispatch(action.requestSuccess(data));
  };
  fetchData().catch(error => {
    dispatch(action.requestFail(error));
  });
};

export default bookRequest;
