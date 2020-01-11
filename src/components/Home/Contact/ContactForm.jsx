import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import {
  ResponsiveVanish,
  ContactContainer,
} from 'components/Home/Contact/ContactStyle';
import InputData from 'components/Home/Contact/InputData';
import { Card, Container, Button } from 'Shared';
// import { connect } from 'react-redux';
// import { authStart } from 'duck/auth/actions';

const ContactForm = ({ onSignUp }) => {
  console.log(onSignUp);
  return (
    <ResponsiveVanish>
      <ContactContainer>
        <Card width="200px" className="shadow" style={{ opacity: 0.9 }}>
          <Formik
            initialValues={{ name: '', password: '', email: '' }}
            validationSchema={Yup.object({
              name: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
              password: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .min(8, 'Must be 8 characters or more')
                .required('Required'),
              email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            })}
            onSubmit={(userData, { setSubmitting }) => {
              onSignUp(userData);
              setSubmitting(false);
              console.log(userData);
            }}
          >
            {() => (
              <Container width="200px">
                <Form>
                  <InputData />
                  <Button
                    type="submit"
                    className="gradation"
                    style={{ width: '200px' }}
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
