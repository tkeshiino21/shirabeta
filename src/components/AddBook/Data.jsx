import React from 'react';
import { ErrorMessage, Field } from 'formik';
import { theme, Container, Spacing, Border } from 'Shared';

const Data = () => {
  const datas = [
    {
      id: 'title',
      name: 'title',
      type: 'text',
    },
    {
      id: 'author',
      name: 'author',
      type: 'text',
    },
    {
      id: 'publishDate',
      name: 'publishDate',
      type: 'text',
    },
  ];

  return datas.map(data => {
    return (
      <li key={data.name}>
        <Container height="20px">
          <label htmlFor={data.name} style={{ width: '80px' }}>
            {data.name}
          </label>
          <Field name={data.name} type={data.type} />
          <ErrorMessage
            name={data.name}
            render={msg => <p style={{ color: 'red' }}>{msg}</p>}
          />
        </Container>
        <Border bottom="1px" color="#aaaaaa" width="200px" />
        <Spacing mBottom={theme.large} />
      </li>
    );
  });
};

export default Data;
