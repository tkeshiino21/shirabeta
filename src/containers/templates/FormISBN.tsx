import { connect } from 'react-redux';
import FormISBN from 'components/templates/FormISBN';
import { bookRequest } from 'duck/bookRegister/operations';

const mapStateToProps = (state: any) => {
  return {
    error: state.register.error,
    showSnack: false,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  ISBNSearch: (ISBN: string) => {
    dispatch(bookRequest(ISBN));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormISBN);
