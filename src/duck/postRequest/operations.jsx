// import { selectors as userSelectors } from 'duck/postRequest/selectors';
import axios from 'axios';
import * as action from 'duck/postRequest/actions';

const postRequest = tagName => dispatch => {
  console.log('request', tagName);
  dispatch(action.requestStart());
  const fetchResource = async () => {
    const url = `https://qiita.com/api/v2/tags/${tagName}/items?page=1&per_page=10`;
    const post = await axios.get(url);
    dispatch(action.requestSuccess(post));
  };
  fetchResource();
};

export default postRequest;
