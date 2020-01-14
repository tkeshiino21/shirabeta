import React from 'react';
import { ErrorMessage, Field } from 'formik';
import { theme, Container, Spacing, Border } from 'Shared';

const CustomInput = props => <input style={{ width: '100%' }} {...props} />;

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
      id: 'publishedDate',
      name: 'publishedDate',
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
          <Field as={CustomInput} name={data.name} type={data.type} />
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

export default Data;
