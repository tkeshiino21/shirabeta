import React from 'react';
import { Form, Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { theme, Box, Button, Spacing, Label } from 'components/atoms';

const FormFormat = ({ formDatas }) => {
  const FormDatasItemsMap = () => {
    return formDatas.items.map(data => {
      return (
        <li key={data.name}>
          <Box height="20px">
            <Label htmlFor={data.name} style={{ width: '80px' }}>
              {data.name}
            </Label>
            <Field as={data.input} name={data.name} type={data.type} />
            <ErrorMessage
              name={data.name}
              render={msg => <p style={{ color: 'red' }}>{msg}</p>}
            />
          </Box>
          <Spacing mBottom={theme.large} />
        </li>
      );
    });
  };
  return (
    <Formik
      initialValues={formDatas.initialValues}
      validationSchema={formDatas.validationSchema}
      onSubmit={formDatas.onSubmit}
    >
      <Form>
        <FormDatasItemsMap />
        <Button className="primary stretch" type="submit">
          {formDatas.action}
        </Button>
      </Form>
    </Formik>
  );
};

export default FormFormat;
