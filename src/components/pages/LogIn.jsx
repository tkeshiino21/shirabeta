import React from 'react';
import { useLocation, Redirect } from 'react-router';
import LayoutCommon from 'components/organisms/Layout/LayoutCommon';
import { theme, Box, Container, Paper, Button, Text } from 'components/atoms';
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
      console.log(userData);
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
        <Text className="caption" as="p">
          MyPageを見るにはログインが必要です。
        </Text>
      );
    } else if (location.state === '/library') {
      return (
        <Text className="caption" as="p">
          本の詳細ページを見るにはログインが必要です。
        </Text>
      );
    } else {
      return null;
    }
  };
  if (authState === true) {
    return <Redirect to="/" />;
  }
  return (
    <LayoutCommon>
      <Box justify="center" align="center" height="400px">
        <Paper style={{ width: '30%', minWidth: '300px' }}>
          <Container padding={`${theme.xlarge} ${theme.large}`}>
            <FromGuardPages />
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
