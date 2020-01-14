import { connect } from 'react-redux';
import ContactForm from 'components/Home/Contact/ContactForm';
import authSwitch from 'duck/auth/operations';

const mapDispatchToProps = dispatch => ({
  onSignUp: userData => {
    dispatch(authSwitch({ method: 'signup', userData: userData }));
  },
});

export default connect(null, mapDispatchToProps)(ContactForm);

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
