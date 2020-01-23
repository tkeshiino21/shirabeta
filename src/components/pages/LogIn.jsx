import React from 'react';
import { useLocation, Redirect } from 'react-router';
import LayoutCommon from 'components/organisms/Layout/LayoutCommon';
import { theme, Spacing, Text } from 'components/atoms';
import * as Yup from 'yup';
import AuthPagesTemplate from 'components/templates/AuthPagesTemplate';
import { logInValidation } from 'components/molecules/Validation';
import { CustomInput } from 'components/molecules/FormCustom';

const LogIn = ({ authState, onLogIn }) => {
  const formDatas = {
    initialValues: {
      emai: '',
      password: '',
    },
    validationShema: Yup.object({
      password: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .min(8, 'Must be 8 characters or more')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    }),
    action: 'LOG IN',
    onSubmit: (userData, { setSubmitting }) => {
      onLogIn(userData);
      setSubmitting(false);
      console.log(userData);
    },
    items: [
      {
        name: 'email',
        type: 'email',
        input: CustomInput,
      },
      {
        name: 'password',
        type: 'password',
        input: CustomInput,
      },
    ],
  };
  const location = useLocation();
  const FromMyPage = () => {
    if (location.state === '/my-page') {
      return <Text>MyPageを見るにはログインが必要です。</Text>;
    } else {
      return null;
    }
  };
  if (authState === true) {
    return <Redirect to="/" />;
  }
  return (
    <AuthPagesTemplate>
      <FromMyPage />
    </AuthPagesTemplate>
  );
};

export default LogIn;
