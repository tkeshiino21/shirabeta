import React from 'react';
import { useLocation, Redirect } from 'react-router';
import AuthForm from 'components/AuthPages/AuthForm';
import Layout from 'layout';
import { theme, Spacing, Text } from 'shared';
import * as Yup from 'yup';

const loginDatas = [
  {
    id: 'email',
    name: 'email',
    type: 'email',
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
  },
];

const LogIn = ({ authState, onLogIn }) => {
  const location = useLocation();
  const FromMyPage = () => {
    if (location.state === 'MyPage') {
      return <Text>MyPageを見るにはログインが必要です。</Text>;
    } else {
      return <></>;
    }
  };
  if (authState === true) {
    return <Redirect to="/" />;
  }
  return (
    <Layout>
      <Spacing mTop={theme.xlarge} />
      <FromMyPage />
      <AuthForm
        initialValues={{ password: '', email: '' }}
        validationSchema={Yup.object({
          password: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .min(8, 'Must be 8 characters or more')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        })}
        submitHandler={(userData, { setSubmitting }) => {
          onLogIn(userData);
          setSubmitting(false);
          console.log(userData);
        }}
        authAction="LogIn"
        datas={loginDatas}
      />
    </Layout>
  );
};

export default LogIn;
