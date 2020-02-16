import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';
import LayoutCommon from 'components/organisms/LayoutCommon';
import { theme, Container, Box, Paper } from 'components/atoms';
import * as Yup from 'yup';
import { CustomInput } from 'components/molecules/FormCustom';
import FormFormat from 'components/molecules/FormFormat';

type Props = {
  authState: boolean;
  onSignUp: (arg0: object) => void;
};

const SignUp: FC<Props> = ({ authState, onSignUp }) => {
  const formDatas: {
    initialValues: object;
    validationSchema: object;
    action: string;
    onSubmit: (userData: object) => void;
    items: { name: string; label: string; type: string; input: FC }[];
  } = {
    initialValues: {
      name: '',
      emai: '',
      password: '',
    },
    validationSchema: Yup.object({
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
    onSubmit: userData => {
      onSignUp(userData);
    },
    items: [
      {
        name: 'name',
        label: 'name',
        type: 'text',
        input: CustomInput,
      },
      {
        name: 'email',
        label: 'email',
        type: 'email',
        input: CustomInput,
      },
      {
        name: 'password',
        label: 'password',
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
      <Box justify="center" align="center" height="500px">
        <Paper style={{ width: '36%', minWidth: '350px' }}>
          <Container padding={`${theme.xxlarge} ${theme.xlarge}`}>
            <FormFormat formDatas={formDatas} />
          </Container>
        </Paper>
      </Box>
    </LayoutCommon>
  );
};

export default SignUp;
