import { connect } from 'react-redux';
import Qiita from 'components/Home/Qiita/Qiita';
import postRequest from 'duck/request/operations';

const mapStateToProps = state => ({
  fetchedPost: state.request.response.data,
  isLoading: state.request.isLoading,
});

const mapDispatchToProps = dispatch => ({
  onRequest: tagName => {
    dispatch(postRequest(tagName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Qiita);
