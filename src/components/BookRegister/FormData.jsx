import React from 'react';
import { ErrorMessage, Field } from 'formik';
import { theme, Border, Container, Spacing } from 'shared';
import { CustomInput } from 'components/BookRegister/FormikConfig';

const FormData = () => {
  const datas = [
    {
      name: 'title',
      as: CustomInput,
      type: 'text',
    },
    {
      name: 'author',
      as: CustomInput,
      type: 'text',
    },
    {
      name: 'publishedDate',
      as: CustomInput,
      type: 'text',
    },
  ];

  return datas.map(data => {
    return (
      <Container key={data.name} className="vertical">
        <Container height="20px">
          <label htmlFor={data.name} style={{ width: '100px' }}>
            {data.name}
          </label>
          <Field as={data.as} name={data.name} type={data.type} />
          <ErrorMessage
            name={data.name}
            render={msg => <p style={{ color: 'red' }}>{msg}</p>}
          />
        </Container>
        <Border bottom="1px" color="#aaaaaa" style={{ width: '100%' }} />
        <Spacing mBottom={theme.large} />
      </Container>
    );
  });
};

export default FormData;
