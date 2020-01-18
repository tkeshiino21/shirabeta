import React from 'react';
import { Form, Formik } from 'formik';
import {
  ResponsiveVanish,
  ContactContainer,
} from 'components/Home/Contact/Style';
import InputData from 'components/Home/Contact/InputData';
import { theme, Button, Card, Container } from 'Shared';

const ContactForm = ({ onSignUp, onLogIn, validationSchema }) => {
  console.log(onSignUp);
  const handleTestUser = () => {
    onLogIn({ email: 'test@gmail.com', password: 'test1234' });
  };
  return (
    <ResponsiveVanish>
      <ContactContainer>
        <Card
          width="240px"
          className="shadow"
          style={{ opacity: 0.9, flexDirection: 'column' }}
        >
          <Formik
            initialValues={{ name: '', password: '', email: '' }}
            validationSchema={validationSchema}
            onSubmit={(userData, { setSubmitting }) => {
              onSignUp(userData);
              setSubmitting(false);
              console.log(userData);
            }}
          >
            {() => (
              <Container width="240px">
                <Form>
                  <InputData />
                  <Button
                    type="submit"
                    className="gradation"
                    style={{ width: '240px' }}
                  >
                    Submit
                  </Button>
                </Form>
              </Container>
            )}
          </Formik>
          <Button
            onClick={handleTestUser}
            className="text"
            color={theme.secondary}
            style={{ width: '240px' }}
          >
            or テストユーザーでログイン
          </Button>
        </Card>
      </ContactContainer>
    </ResponsiveVanish>
  );
};

export default ContactForm;
