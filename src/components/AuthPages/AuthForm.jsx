import React from 'react';
import { Form, Formik } from 'formik';
import FormData from 'components/AuthPages/FormData';
import styled from 'styled-components';
import { theme, Card, Container, Button, Spacing } from 'shared';

const Contact = styled(Container)`
  flex-direction: column;
  justify-content: center;
  width: 50vh;
  min-width: 400px;
`;

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
