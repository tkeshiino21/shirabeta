import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import DirectInputData from 'components/AddBook/DirectInputData';
import { Card, Container, Button } from 'Shared';

const AddForm = ({ fetchedBook, isLoading }) => {
  console.log(fetchedBook);
  const initialValues = {
    title: fetchedBook === null ? '' : fetchedBook[0].title,
    author: fetchedBook === null ? '' : fetchedBook[0].authors,
    publishedDate: fetchedBook === null ? '' : fetchedBook[0].publishedDate,
  };

  if (isLoading === true) {
    return <h1>now on loading</h1>;
  }
  return (
    <Card width="auto">
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          title: Yup.string()
            .max(40, 'Must be 40 characters or less')
            .required('Required'),
          author: Yup.string()
            .max(40, 'Must be 40 characters or less')
            .required('Required'),
          publishedDate: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        {() => (
          <Container>
            <Form>
              <DirectInputData />
              <Button type="submit">Submit</Button>
            </Form>
          </Container>
        )}
      </Formik>
      {console.log(Formik)}
    </Card>
  );
};

export default AddForm;
