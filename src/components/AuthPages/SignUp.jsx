import React from 'react';
import { Redirect } from 'react-router-dom';
import AuthForm from 'components/AuthPages/AuthForm';
import Layout from 'Layout';
import { theme, Spacing } from 'Shared';
import * as Yup from 'yup';

const signupDatas = [
  {
    id: 'name',
    name: 'name',
    type: 'text',
  },
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

const SignUp = ({ onSignUp, authState }) => {
  if (authState === true) {
    return <Redirect to="/" />;
  }
  return (
    <Layout>
      <Spacing mTop={theme.xlarge} />
      <AuthForm
        initialValues={{ name: '', password: '', email: '' }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          password: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .min(8, 'Must be 8 characters or more')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        })}
        submitHandler={(userData, { setSubmitting }) => {
          onSignUp(userData);
          setSubmitting(false);
          console.log(userData);
        }}
        authAction="SignUp"
        datas={signupDatas}
      />
    </Layout>
  );
};

export default SignUp;
