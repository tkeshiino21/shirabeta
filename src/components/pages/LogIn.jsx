import React from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import LayoutCommon from 'components/organisms/Layout/LayoutCommon';
import {
  theme,
  Box,
  Container,
  Paper,
  Button,
  Text,
  Spacing,
} from 'components/atoms';
import * as Yup from 'yup';
import { CustomInput } from 'components/molecules/FormCustom';
import FormFormat from 'components/molecules/FormFormat';

const LogIn = ({ authState, onLogIn }) => {
  const formDatas = {
    initialValues: {
      email: '',
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
    },
    items: [
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
  const location = useLocation();
  const FromGuardPages = () => {
    if (location.state === '/my-page') {
      return (
        <Text className="body1" as="p" color="red">
          MyPageを見るにはログインが必要です。
        </Text>
      );
    }
    if (location.state === '/library') {
      return (
        <Text className="body1" as="p" color="red">
          本の詳細ページを見るにはログインが必要です。
        </Text>
      );
    }

    return null;
  };
  if (authState === true) {
    return <Redirect to="/" />;
  }

  return (
    <LayoutCommon>
      <Box justify="center" align="center" height="500px">
        <Paper style={{ width: '36%', minWidth: '350px' }}>
          <Container padding={`${theme.xxlarge} ${theme.xlarge}`}>
            <FromGuardPages />
            <Spacing mTop={theme.medium} />
            <FormFormat formDatas={formDatas} />
            <Button
              onClick={() => {
                onLogIn({ email: 'test@gmail.com', password: 'test1234' });
              }}
              className="text stretch"
              color={theme.secondary}
            >
              or テストユーザーでログイン
            </Button>
          </Container>
        </Paper>
      </Box>
    </LayoutCommon>
  );
};

export default LogIn;
