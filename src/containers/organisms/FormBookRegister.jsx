import { connect } from 'react-redux';
import FormBookRegister from 'components/organisms/FormBookRegister';
import { bookRegister } from 'duck/bookRegister/operations';

const getFormatData = state => {
  console.log('it', state.register.response);
  const responseRef = state.register.response;
  if (responseRef === '') {
    return null;
  } else {
    return responseRef.data.totalItems === 1
      ? responseRef.data.items.map(item => {
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
  }
};

const mapStateToProps = state => {
  return {
    fetchedBook: getFormatData(state),
    inputISBN: state.register.inputISBN,
    isLoading: state.register.isLoading,
    isAdding: state.register.isAdding,
    error: state.register.error,
    showSnack: state.register.showSnack,
  };
};

const mapDispatchToProps = dispatch => ({
  onRegister: bookDatas => {
    dispatch(bookRegister(bookDatas));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormBookRegister);
