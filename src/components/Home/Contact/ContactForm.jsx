import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import {
  ResponsiveVanish,
  ContactContainer,
} from 'components/Home/Contact/Style';
import InputData from 'components/Home/Contact/InputData';
import { Card, Container, Button } from 'Shared';

const ContactForm = ({ onSignUp, validationSchema }) => {
  console.log(onSignUp);
  return (
    <ResponsiveVanish>
      <ContactContainer>
        <Card width="240px" className="shadow" style={{ opacity: 0.9 }}>
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
        </Card>
      </ContactContainer>
    </ResponsiveVanish>
  );
};

export default ContactForm;
