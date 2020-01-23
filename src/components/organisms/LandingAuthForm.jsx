import React from 'react';
import * as Yup from 'yup';
import { Form, Formik, ErrorMessage, Field } from 'formik';
import FormFormat from 'components/molecules/FormFormat';
import { theme, Box, Button, Card, Container, Spacing } from 'components/atoms';
import { CustomInput } from 'components/molecules/FormCustom';
import { Collapse } from 'components/atoms/media';

const LandingAuthForm = ({ onSignUp, onLogIn }) => {
  const formDatas = {
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
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .min(8, 'Must be 8 characters or more')
        .required('Required'),
    }),
    action: 'SIGN UP',
    onSubmit: (userData, { setSubmitting }) => {
      onSignUp(userData);
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
  const handleTestUser = () => {
    onLogIn({ email: 'test@gmail.com', password: 'test1234' });
  };
  return (
    <Collapse className="md">
      <Card className="shadow" style={{ width: '300px', height: '300px' }}>
        <Container>
          <Box
            className="vertical"
            justify="center"
            aligns="center"
            self="center"
            height="100%"
            style={{ border: '1px solid grey' }}
          >
            <FormFormat
              formDatas={formDatas}
              style={{ width: '240px', height: '240px' }}
            />
            <Spacing mTop={theme.small} />
            <Button
              onClick={handleTestUser}
              className="text stretch"
              color={theme.secondary}
            >
              or テストユーザーでログイン
            </Button>
          </Box>
        </Container>
      </Card>
    </Collapse>
  );
};

export default LandingAuthForm;
