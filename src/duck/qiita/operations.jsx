// import { selectors as userSelectors } from 'duck/postRequest/selectors';
import axios from 'axios';
import * as action from 'duck/qiita/actions';

export const postRequest = tagName => dispatch => {
  dispatch(action.postRequestStart());
  const fetchResource = async () => {
    const perPage = 'items?page=1&per_page=15';
    const url = `https://qiita.com/api/v2/tags/${tagName}/${perPage}`;
    const data = await axios.get(url);
    dispatch(action.postRequestSuccess(data));
  };
  fetchResource().catch(error => {
    dispatch(action.postRequestFail(error));
  });
};
