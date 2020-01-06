import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import InputData from './InputData';
import { media, Card, Container, Button } from '../../shared';

const ResponsiveContainer = styled(Container)`
  ${media.md`
    display: none;
  `}
`;

const ContactForm = () => {
  return (
    <ResponsiveContainer>
      <Container
        className="vertical"
        justify="center"
        align="flex-end"
        height="100%"
        width="100%"
      >
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
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                // alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
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
      </Container>
    </ResponsiveContainer>
  );
};

export default ContactForm;
