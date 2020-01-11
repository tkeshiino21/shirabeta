import { connect } from 'react-redux';
import ContactFormComponent from 'components/Home/Contact/ContactForm';
import authSwitch from 'duck/auth/operations';

const mapDispatchToProps = dispatch => ({
  onSignUp: userData => {
    dispatch(authSwitch({ method: 'signup', userData: userData }));
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
