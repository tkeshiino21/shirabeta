import React, { FC } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import LayoutCommon from 'components/organisms/LayoutCommon';
import {
  theme,
  Box,
  Container,
  Paper,
  Button,
  Text,
  Spacing,
  Strong,
} from 'components/atoms';
import * as Yup from 'yup';
import { CustomInput } from 'components/molecules/FormCustom';
import FormFormat from 'components/molecules/FormFormat';

type Props = {
  authState: boolean;
  onLogIn: (arg0: object) => void;
};

const LogIn: FC<Props> = ({ authState, onLogIn }) => {
  const formDatas: any = {
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .min(8, 'Must be 8 characters or more')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    }),
    action: 'LOG IN',
    onSubmit: (userData: any, { setSubmitting }: any) => {
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
        <Text className="h6" as="p" color={theme.primary}>
          We are sorry...MyPageを見るにはログインが必要です。
        </Text>
      );
    }
    if (location.state === '/library') {
      return (
        <Text className="h6" as="p" color={theme.primary}>
          We are sorry...本の詳細ページを見るにはログインが必要です。
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
      <Box className="vertical" align="center" height="500px">
        <Spacing mTop="50px" />
        <FromGuardPages />
        <Box justify="center" align="center">
          <Paper style={{ width: '36%', minWidth: '350px' }}>
            <Container padding={`${theme.xxlarge} ${theme.xlarge}`}>
              <Spacing mTop={theme.medium} />
              <FormFormat formDatas={formDatas} />
              <Spacing mTop={theme.small} />
              <Button
                onClick={() => {
                  onLogIn({ email: 'test@gmail.com', password: 'test1234' });
                }}
                className="text stretch"
                color={theme.secondary}
              >
                or テストユーザーで<Strong>ログイン</Strong>
              </Button>
            </Container>
          </Paper>
        </Box>
      </Box>
    </LayoutCommon>
  );
};

export default LogIn;
