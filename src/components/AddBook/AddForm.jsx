import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import DirectInputData from 'components/AddBook/DirectInputData';
import { Container, Button, Text, Snackbar } from 'Shared';
import { setTimeout } from 'timers';

const AddForm = ({
  fetchedBook,
  isLoading,
  onSubmit,
  setLoading,
  setClear,
}) => {
  const [showSnack, setShowSnack] = useState('hidden');
  const initialValues = {
    title: fetchedBook === null ? '' : fetchedBook[0].title,
    author: fetchedBook === null ? '' : fetchedBook[0].authors,
    publishedDate: fetchedBook === null ? '' : fetchedBook[0].publishedDate,
  };

  if (isLoading === true) {
    return <h1>now on loading</h1>;
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        title: Yup.string()
          .max(150, 'Must be 150 characters or less')
          .required('Required'),
        author: Yup.string()
          .max(40, 'Must be 40 characters or less')
          .required('Required'),
        publishedDate: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
        setLoading();
        setClear();
        setShowSnack('show');
        setTimeout(() => {
          console.log('changed2');
          return setShowSnack('hidden');
        }, 3000);
      }}
    >
      {() => (
        <Container
          className="vertical"
          justify="stretch"
          style={{ minWidth: '30vw' }}
        >
          <Form>
            <DirectInputData />
            {/* <button onClick={handleClick}>click me</button> */}
            <Snackbar className={showSnack}>Successfully added !</Snackbar>
            <Button className="primary stretch" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      )}
    </Formik>
  );
};

export default AddForm;
