import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Data from 'components/AddBook/Data';
import { Card, Container, Button } from 'Shared';

const AddForm = () => {
  return (
    <Card width="auto">
      <Formik
        initialValues={{ title: '', author: '', publishDate: '' }}
        validationSchema={Yup.object({
          title: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          author: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          publishDate: Yup.string()
            .email(20, 'Must be 20 characters or less')
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
          <Container>
            <Form>
              <Data />
              <Button type="submit">Submit</Button>
            </Form>
          </Container>
        )}
      </Formik>
    </Card>
  );
};

export default AddForm;
