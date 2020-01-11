// import { selectors as userSelectors } from 'duck/postRequest/selectors';
import axios from 'axios';
import * as action from 'duck/postRequest/actions';

const postRequest = key => (dispatch, getState) => {
  dispatch(action.requestStart());
  const state = getState();
  // const userId = userSelectors.getPost(state);
  const fetchResource = async () => {
    const url = 'https://qiita.com/api/v2/tags/技術書/items?page=1&per_page=10';
    const post = await axios.get(url);
    dispatch(action.requestSuccess(post));
    // dispatch(userOperations.incrementAccessCount());
  };
  fetchResource();
};

export default postRequest;
