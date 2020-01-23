import { connect } from 'react-redux';
import PostQiita from 'components/organisms/PostQiita';
import { postRequest } from 'duck/qiita/operations';

const mapStateToProps = state => ({
  fetchedPosts: state.qiita.response.data,
  isLoading: state.qiita.isLoading,
});

const mapDispatchToProps = dispatch => ({
  onRequest: tagName => {
    dispatch(postRequest(tagName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostQiita);
