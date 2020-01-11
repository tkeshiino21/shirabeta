import React from 'react';
import styled from 'styled-components';
import { theme, media, Container, Spacing } from 'Shared';
import Layout from 'Layout';
import ISBNFetch from 'components/AddBook/ISBNFetch';
import AddForm from 'components/AddBook/AddForm';

export const ResponsiveVanish = styled(Container)`
  width: 10px;
  height: auto;
  align-items: center;
  border-right: 1px solid grey;

  ${media.md`
    display: none;
  `}
`;

const AddBook = () => {
  return (
    <Layout>
      <Container className="vertical" width="100%">
        <Spacing mTop="90px" mBottom="60px">
          <p>ISBNコードで該当のない場合は直接入力してください。</p>
        </Spacing>
        <div>
          <Container
            height="auto"
            justify="space-around"
            style={{ flexWrap: 'wrap' }}
          >
            <ISBNFetch />
            <ResponsiveVanish>
              <p style={{ display: 'block', backgroundColor: theme.natural }}>
                OR
              </p>
            </ResponsiveVanish>
            <AddForm />
          </Container>
        </div>
      </Container>
    </Layout>
  );
};

export default AddBook;
