import { connect } from 'react-redux';
import PostItems from 'components/Home/MileStones/PostItems';
import postRequest from 'duck/postRequest/operations';

const mapStateToProps = state => ({
  fetchedPost: state.post.response.data,
  isLoading: state.post.isLoading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRequest: () => {
    dispatch(postRequest(ownProps));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostItems);
