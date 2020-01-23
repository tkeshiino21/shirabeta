import React from 'react';
import { Redirect } from 'react-router-dom';
import LayoutCommon from 'components/organisms/Layout/LayoutCommon';
import { theme, Spacing, Box, Paper } from 'components/atoms';
import * as Yup from 'yup';
import { CustomInput } from 'components/molecules/FormCustom';
import FormFormat from 'components/molecules/FormFormat';

const SignUp = ({ authState, onSignUp }) => {
  const formDatas = {
    initialValues: {
      name: '',
      emai: '',
      password: '',
    },
    validationShema: Yup.object({
      name: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .min(8, 'Must be 8 characters or more')
        .required('Required'),
      password: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .min(8, 'Must be 8 characters or more')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    }),
    action: 'SIGN UP',
    onSubmit: (userData, { setSubmitting }) => {
      onSignUp(userData);
      setSubmitting(false);
      console.log(userData);
    },
    items: [
      {
        name: 'name',
        type: 'text',
        input: CustomInput,
      },
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
  if (authState === true) {
    return <Redirect to="/" />;
  }
  return (
    <LayoutCommon>
      <Box style={{ alignSelf: 'center', flexBasis: '400px' }}>
        <Paper>
          <Spacing mTop={theme.xlarge} />
          <FormFormat formDatas={formDatas} />
        </Paper>
      </Box>
    </LayoutCommon>
  );
};

export default SignUp;