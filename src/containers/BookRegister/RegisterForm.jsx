import { connect } from 'react-redux';
import RegisterForm from 'components/BookRegister/RegisterForm';
import { bookRegister } from 'duck/bookRegister/operations';
import { bookRequest } from 'duck/bookRegister/operations';

const getFormatData = state => {
  return state.register.response.data !== undefined &&
    state.register.response.data.totalItems === 1
    ? state.register.response.data.items.map(item => {
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
    isLoading: state.register.isLoading,
    isAdding: state.register.isAdding,
    error: state.register.error,
  };
};

const mapDispatchToProps = dispatch => ({
  onSubmit: book => {
    dispatch(bookRegister(book));
  },
  onRequest: ISBN => {
    dispatch(bookRequest(ISBN));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
