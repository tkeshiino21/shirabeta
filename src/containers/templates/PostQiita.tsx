import { connect } from 'react-redux';
import PostQiita from 'components/templates/PostQiita';
import { postRequest } from 'duck/qiita/operations';

const mapStateToProps = (state: any) => ({
  fetchedPosts: state.qiita.response.data,
  isLoading: state.qiita.isLoading,
});

const mapDispatchToProps = (dispatch: any) => ({
  onRequest: (tagName: string) => {
    dispatch(postRequest(tagName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostQiita);
