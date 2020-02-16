import { connect } from 'react-redux';
import FormComment from 'components/templates/FormComment';
import { bookComment } from 'duck/libraryDetail/operations';

const mapDispatchToProps = (dispatch: any) => ({
  onComment: (
    ISBN: string,
    title: string,
    uid: string,
    userName: string,
    comment: string,
  ) => {
    dispatch(bookComment(ISBN, title, uid, userName, comment));
  },
});

export default connect(null, mapDispatchToProps)(FormComment);
