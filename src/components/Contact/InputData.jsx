import React from 'react';
import { ErrorMessage, Field } from 'formik';
import { theme, Container, Spacing, Border } from '../../shared';

const InputData = () => {
  const datas = [
    {
      id: 'name',
      name: 'name',
      type: 'text',
    },
    {
      id: 'email',
      name: 'email',
      type: 'email',
    },
    {
      id: 'password',
      name: 'password',
      type: 'password',
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

export default InputData;
