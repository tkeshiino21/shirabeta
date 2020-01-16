import React from 'react';
import { Form, Formik } from 'formik';
import FormData from 'components/AuthPages/FormData';
import { theme, Card, Container, Button, Spacing } from 'Shared';
import { Contact } from 'components/Home/Contact/Style';

const AuthForm = ({
  initialValues,
  validationSchema,
  submitHandler,
  authAction,
  datas,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitHandler}
    >
      {() => (
        <Form>
          <Container justify="center" style={{ alignSelf: 'center' }}>
            <Contact>
              <Card width="auto">
                <Container className="vertical" justify="center">
                  <FormData datas={datas} />
                  <Spacing mTop={theme.xlarge} />
                  <Button className="primary" type="submit">
                    {authAction}
                  </Button>
                </Container>
              </Card>
            </Contact>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
