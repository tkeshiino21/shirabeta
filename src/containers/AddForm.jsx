import { connect } from 'react-redux';
import AddForm from 'components/AddBook/AddForm';
import { bookAdd } from 'duck/bookAdd/operations';
import * as action from 'duck/request/actions';
import { bookRequest } from 'duck/request/operations';

const getFormatData = state => {
  return state.request.response.data !== undefined &&
    state.request.response.data.totalItems === 1
    ? state.request.response.data.items.map(item => {
        // console.log(state.request.response.data);
        return {
          id: item.id,
          title: item.volumeInfo.title,
          subtitle: item.volumeInfo.subtitle,
          authors: [item.volumeInfo.authors],
          publishedDate: item.volumeInfo.publishedDate,
          image: item.volumeInfo.imageLinks.thumbnail,
          description: item.volumeInfo.description,
        };
      })
    : null;
};

const mapStateToProps = state => {
  return {
    fetchedBook: getFormatData(state),
    isLoading: state.request.isLoading,
    isAdding: state.add.isAdding,
    error: state.request.error,
  };
};

const mapDispatchToProps = dispatch => ({
  onSubmit: book => {
    dispatch(bookAdd(book));
  },
  setLoading: () => {
    dispatch(action.requestStart());
  },
  setClear: () => {
    dispatch(action.clearState());
  },
  onRequest: ISBN => {
    dispatch(bookRequest(ISBN));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
