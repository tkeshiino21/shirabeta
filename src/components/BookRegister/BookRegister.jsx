import React from 'react';
import Layout from 'layout';
import AddForm from 'containers/BookRegister/RegisterForm';
import { theme, Container, Spacing } from 'shared';

const BookRegister = () => {
  return (
    <Layout>
      <Container className="vertical">
        <Spacing mTop={theme.xlarge} mBottom={theme.xlarge}>
          <p>ISBNコードで該当のない場合は直接入力してください。</p>
        </Spacing>
        <AddForm />
      </Container>
    </Layout>
  );
};

export default BookRegister;
