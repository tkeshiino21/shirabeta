import { connect } from 'react-redux';
import ContactFormComponent from 'components/Home/Contact/ContactForm';
import { authStart } from 'duck/auth/actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: () => {
    dispatch(authStart(ownProps));
  },
});

export default connect(null, mapDispatchToProps)(ContactFormComponent);

//  const dispatch = useDispatch();
//    dispatch(
//      authAction({
//        payload: {
//          email: inputForm.email,
//          password: inputForm.password,
//          name: inputForm.name,
//          method: 'signup',
//        },
//      }),
//    );
//  };
