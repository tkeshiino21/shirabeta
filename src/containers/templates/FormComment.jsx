import { connect } from 'react-redux';
import FormComment from 'components/templates/FormComment';
import { bookComment } from 'duck/libraryDetail/operations';

const mapDispatchToProps = dispatch => ({
  onComment: (ISBN, title, uid, userName, comment) => {
    dispatch(bookComment(ISBN, title, uid, userName, comment));
  },
});

export default connect(null, mapDispatchToProps)(FormComment);
