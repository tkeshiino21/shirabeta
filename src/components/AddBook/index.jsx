import React from 'react';

import Layout from 'components/Layout';
import AddForm from 'containers/AddForm';
import { theme, Container, Spacing } from 'Shared';

const AddBook = () => {
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

export default AddBook;
