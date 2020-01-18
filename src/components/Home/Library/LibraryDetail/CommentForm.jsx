import React from 'react';
import { Form, Formik, ErrorMessage, Field } from 'formik';
import { Container, Button, Textarea } from 'Shared';

const CommentForm = ({ validationSchema, handleSubmit }) => {
  const CustomTextarea = props => <Textarea className="outlined" {...props} />;
  return (
    <>
      <Formik
        initialValues={{ comment: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <Container justify="center" style={{ alignSelf: 'center' }}>
              <Container className="vertical" justify="center">
                <Container height="250px">
                  <Field as={CustomTextarea} name="comment" type="text" />
                  <ErrorMessage
                    name="comment"
                    render={msg => <p style={{ color: 'red' }}>{msg}</p>}
                  />
                </Container>
                <Container justify="flex-end" align="center">
                  <Button
                    className="secondary"
                    type="submit"
                    style={{ width: '200px', height: '50px' }}
                  >
                    送信
                  </Button>
                </Container>
              </Container>
            </Container>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CommentForm;
