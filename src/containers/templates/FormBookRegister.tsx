import { connect } from 'react-redux';
import FormBookRegister from 'components/templates/FormBookRegister';
import { bookRegister } from 'duck/bookRegister/operations';

const getFormatData = (state: any) => {
  const responseRef = state.register.response;
  if (responseRef === '') {
    return null;
  }

  return responseRef.data.totalItems === 1
    ? responseRef.data.items.map(
        (item: {
          id: string;
          volumeInfo: {
            title: string;
            subtitle: string;
            authors: string[];
            publishedDate: string;
            imageLinks: { thumbnail: string };
            description: string;
          };
        }) => {
          return {
            id: item.id,
            title: item.volumeInfo.title,
            subtitle: item.volumeInfo.subtitle,
            authors: [item.volumeInfo.authors],
            publishedDate: item.volumeInfo.publishedDate,
            image: item.volumeInfo.imageLinks.thumbnail,
            description: item.volumeInfo.description,
          };
        },
      )
    : null;
};

const mapStateToProps = (state: any) => {
  return {
    fetchedBook: getFormatData(state),
    inputISBN: state.register.inputISBN,
    isLoading: state.register.isLoading,
    isAdding: state.register.isAdding,
    error: state.register.error,
    showSnack: state.register.showSnack,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onRegister: (bookDatas: object) => {
    dispatch(bookRegister(bookDatas));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormBookRegister);
