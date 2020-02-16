import React, { FC } from 'react';
import * as Yup from 'yup';
import FormFormat from 'components/molecules/FormFormat';
import {
  theme,
  Box,
  Button,
  Card,
  Container,
  Spacing,
  Strong,
} from 'components/atoms';
import { CustomInput } from 'components/molecules/FormCustom';
import { Collapse } from 'components/atoms/media';

type LandingToSignProps = {
  onSignUp: (userData: object) => void;
  onLogIn: (userData: object) => void;
};

const LandingToSign: FC<LandingToSignProps> = ({ onSignUp, onLogIn }) => {
  const formDatas: {
    initialValues: object;
    validationSchema: object;
    action: string;
    onSubmit: (userData: object) => void;
    items: { name: string; label: string; type: string; input: FC }[];
  } = {
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .min(8, 'Must be 8 characters or more')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .min(8, 'Must be 8 characters or more')
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
  const handleTestUser = () => {
    onLogIn({ email: 'test@gmail.com', password: 'test1234' });
  };

  return (
    <Collapse className="md">
      <Card className="shadow" style={{ width: '400px', height: '350px' }}>
        <Container padding={`${theme.xlarge} ${theme.xlarge}`}>
          <Box
            className="vertical"
            justify="center"
            aligns="center"
            self="center"
            height="100%"
          >
            <FormFormat formDatas={formDatas} gradation="gradation" />
            <Spacing mTop={theme.small} />
            <Button
              onClick={handleTestUser}
              className="text stretch"
              color={theme.secondary}
            >
              or テストユーザーで<Strong>ログイン</Strong>
            </Button>
          </Box>
        </Container>
      </Card>
    </Collapse>
  );
};

export default LandingToSign;
