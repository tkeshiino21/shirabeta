// import { selectors as userSelectors } from 'duck/postRequest/selectors';
import axios from 'axios';
import * as action from 'duck/request/actions';

export const postRequest = tagName => dispatch => {
  // console.log('request', tagName);
  dispatch(action.requestStart());
  const fetchResource = async () => {
    const perPage = 'items?page=1&per_page=15';
    const url = `https://qiita.com/api/v2/tags/${tagName}/${perPage}`;
    const data = await axios.get(url);
    dispatch(action.requestSuccess(data));
  };
  fetchResource().catch(error => {
    dispatch(action.requestFail(error));
  });
};

export const bookRequest = ISBN => dispatch => {
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
