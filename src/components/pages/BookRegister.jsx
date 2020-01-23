import React from 'react';
import AddForm from 'containers/BookRegister/RegisterForm';
import { theme, Container, Spacing } from 'components/atoms';

const BookRegister = () => {
  return (
    <Container className="vertical">
      <Spacing mTop={theme.xlarge} mBottom={theme.xlarge}>
        <p>ISBNコードで該当のない場合は直接入力してください。</p>
      </Spacing>
      <AddForm />
    </Container>
  );
};

export default BookRegister;
