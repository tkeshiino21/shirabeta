// import { selectors as userSelectors } from 'duck/postRequest/selectors';
import axios from 'axios';
import * as action from 'duck/bookRequest/actions';

const bookRequest = ISBN => dispatch => {
  dispatch(action.requestStart());
  console.log('redux', ISBN);
  const fetchData = async () => {
    const baseURL = 'https://www.googleapis.com';
    const queryURL = `${baseURL}/books/v1/volumes?q=isbn:${ISBN}`;
    const book = await axios.get(queryURL);
    dispatch(action.requestSuccess(book));
  };
  fetchData();
};

export default bookRequest;
