import React from 'react';
import { ErrorMessage, Field } from 'formik';
import { theme, Container, Spacing, Border } from 'shared';

const CustomInput = props => <input style={{ width: '100%' }} {...props} />;

const FormData = () => {
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
          <Field as={CustomInput} name={data.name} type={data.type} />
          <ErrorMessage
            name={data.name}
            render={msg => <p style={{ color: 'red' }}>{msg}</p>}
          />
        </Container>
        <Border bottom="1px" color="#aaaaaa" width="240px" />
        <Spacing mBottom={theme.large} />
      </li>
    );
  });
};

export default FormData;
