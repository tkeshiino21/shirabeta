import React from 'react';
import styled from 'styled-components';
import bookAndGlasses from 'images/bookAndGlasses.jpg';
import Layout from 'components/Layout';
import ISBNRequest from 'containers/ISBNRequest';
import AddForm from 'containers/AddForm';
import { theme, Card, Container, Spacing, ImgContainer, Box } from 'Shared';

const AddBook = () => {
  return (
    <Layout>
      <Container className="vertical">
        <Spacing mTop={theme.xlarge} mBottom={theme.xlarge}>
          <p>ISBNコードで該当のない場合は直接入力してください。</p>
        </Spacing>

        <Container className="horizontal" style={{ alignSelf: 'center' }}>
          <Card>
            <Spacing mTop={theme.medium} mBottom={theme.medium}>
              <Container
                className="vertical grow"
                height="auto"
                justify="center"
              >
                <ISBNRequest />
                <Spacing mTop={theme.large} />
                <AddForm />
              </Container>
            </Spacing>
          </Card>
          <ImgContainer image={bookAndGlasses} style={{ overflow: 'hidden' }} />
        </Container>
      </Container>
    </Layout>
  );
};

export default AddBook;
