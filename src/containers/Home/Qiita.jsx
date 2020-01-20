import { connect } from 'react-redux';
import Qiita from 'components/Home/Qiita/Qiita';
import { postRequest } from 'duck/qiita/operations';

const mapStateToProps = state => ({
  fetchedPost: state.qiita.response.data,
  isLoading: state.qiita.isLoading,
});

const mapDispatchToProps = dispatch => ({
  onRequest: tagName => {
    dispatch(postRequest(tagName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Qiita);
