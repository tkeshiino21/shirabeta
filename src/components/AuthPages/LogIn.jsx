import React from 'react';
import { useLocation } from 'react-router';
import AuthForm from 'components/AuthPages/AuthForm';
import Layout from 'components/Layout';
import { theme, Spacing, Text } from 'Shared';
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

const LogIn = ({ onSubmit }) => {
  const location = useLocation();
  const FromMyPage = () => {
    if (location.state) {
      return <Text>MyPageを見るにはログインが必要です。</Text>;
    } else {
      return null;
    }
  };
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
        submitHandler={onSubmit}
        authAction="LogIn"
        datas={loginDatas}
      />
    </Layout>
  );
};

export default LogIn;
