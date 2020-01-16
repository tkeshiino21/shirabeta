import React from 'react';

import { ErrorMessage, Field } from 'formik';
import { theme, Container, Spacing, Border } from 'Shared';

const CustomInput = props => <input style={{ width: '100%' }} {...props} />;

const InputData = ({ datas }) => {
  return datas.map(data => {
    return (
      <div key={data.name}>
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
        <Border bottom="1px" color="#aaaaaa" width="100%" />
        <Spacing mBottom={theme.large} />
      </div>
    );
  });
};

export default InputData;
