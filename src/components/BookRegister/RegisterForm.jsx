import React, { useState } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormData from 'components/BookRegister/FormData';
import {
  TransparentInput,
  HiddenInput,
  CustomSelect,
} from 'components/BookRegister/FormikConfig';
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
} from 'shared';
import bookAndGlasses from 'images/bookAndGlasses.jpg';

const AddForm = ({ onRequest, fetchedBook, isLoading, onSubmit }) => {
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
    image: fetchedBook === null ? '' : fetchedBook[0].image,
    description: fetchedBook === null ? '' : fetchedBook[0].description,
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
      {console.log(fetchedBook)}
      <Card>
        <Spacing mTop={theme.medium} mBottom={theme.medium}>
          <Container className="vertical grow" height="auto" justify="center">
            <Formik
              initialValues={initialValues}
              validationSchema={Yup.object({
                ISBN: Yup.string()
                  .max(16, '不正なISBNコードです')
                  .required('↑Required'),
                title: Yup.string()
                  .max(150, 'タイトルが長すぎます')
                  .required('Required'),
                author: Yup.string().required('Required'),
                publishedDate: Yup.string()
                  .max(20, 'Must be 20 characters or less')
                  .matches(/[a-z0-9_-]+/, '半角英数字と記号のみ')
                  .required('Required'),
                description: Yup.string(),
                image: Yup.string(),
                category: Yup.string().required('Required'),
              })}
              onSubmit={(values, { setSubmitting }) => {
                onSubmit(values);
                setSubmitting(false);
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
                    <Field as={TransparentInput} name="ISBN" type="text" />
                    <Field as={HiddenInput} name="description" type="text" />
                    <Field as={HiddenInput} name="image" type="text" />
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
                      <FormData />
                      <Field as={CustomSelect} name="category" type="text" />
                      <Spacing mBottom={theme.large} />
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
