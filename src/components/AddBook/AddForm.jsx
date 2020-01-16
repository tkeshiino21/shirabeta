import React, { useState } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DirectInputData from 'components/AddBook/DirectInputData';
import {
  theme,
  Spacing,
  Card,
  Container,
  Button,
  Snackbar,
  ImgContainer,
  Input,
  InlineButton,
} from 'Shared';
import bookAndGlasses from 'images/bookAndGlasses.jpg';

const CustomInput = props => <input style={{ opacity: 0 }} {...props} />;

const AddForm = ({
  onRequest,
  fetchedBook,
  isLoading,
  onSubmit,
  setLoading,
  setClear,
}) => {
  const [ISBN, setISBN] = useState('');
  const handleChange = e => {
    return setISBN(e.target.value);
  };
  const handleClick = () => {
    onRequest(ISBN);
  };
  const [showSnack, setShowSnack] = useState('hidden');
  const initialValues = {
    ISBN: ISBN,
    title: fetchedBook === null ? '' : fetchedBook[0].title,
    author: fetchedBook === null ? '' : fetchedBook[0].authors,
    publishedDate: fetchedBook === null ? '' : fetchedBook[0].publishedDate,
  };

  if (isLoading === true) {
    return <h1>now on loading</h1>;
  }
  return (
    <Container className="horizontal" style={{ alignSelf: 'center' }}>
      <ImgContainer
        image={fetchedBook === null ? bookAndGlasses : fetchedBook[0].image}
        style={{ overflow: 'hidden' }}
        SameSite="None"
      />
      <Card>
        <Spacing mTop={theme.medium} mBottom={theme.medium}>
          <Container className="vertical grow" height="auto" justify="center">
            <Formik
              initialValues={initialValues}
              validationSchema={Yup.object({
                ISBN: Yup.string()
                  .max(16, 'Must be 16 characters or less')
                  .required('↑Required'),
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
                setISBN('');
                setShowSnack('show');
                setTimeout(() => {
                  return setShowSnack('hidden');
                }, 3000);
              }}
            >
              {() => (
                <Container
                  className="vertical grow"
                  height="auto"
                  justify="center"
                >
                  <Form>
                    <Container className="horizontal" height="auto">
                      <label htmlFor="ISBN" style={{ width: '100px' }}>
                        ISBN
                      </label>
                      <Input
                        className="outlined"
                        id="ISBN"
                        type="text"
                        onChange={handleChange}
                        value={ISBN}
                        style={{ width: '100%', boxSizing: 'border-box' }}
                      />
                      <InlineButton onClick={handleClick}>SEARCH</InlineButton>
                    </Container>
                    <Field as={CustomInput} name="ISBN" type="text" />
                    <ErrorMessage
                      name="ISBN"
                      render={msg => <p style={{ color: 'red' }}>{msg}</p>}
                    />
                    <Spacing mTop={theme.large} />
                    <Container
                      className="vertical"
                      justify="stretch"
                      style={{ minWidth: '30vw' }}
                    >
                      <DirectInputData />
                      {/* <button onClick={handleClick}>click me</button> */}
                      <Snackbar className={showSnack}>
                        Successfully added !
                      </Snackbar>
                      <Button className="primary stretch" type="submit">
                        Submit
                      </Button>
                    </Container>
                  </Form>
                </Container>
              )}
            </Formik>
          </Container>
        </Spacing>
      </Card>
    </Container>
  );
};

export default AddForm;
