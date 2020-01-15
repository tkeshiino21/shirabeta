import React from 'react';

import Layout from 'components/Layout';
import { MdKeyboardBackspace } from 'react-icons/md';
import { ArticleTitle } from 'components/Home/Qiita/Style';
import {
  theme,
  Text,
  Button,
  Border,
  Card,
  Container,
  Spacing,
  ImgContainer,
  Box,
} from 'Shared';

const LibraryDetail = ({ onBorrow, isLoading, library }) => {
  return (
    <Layout>
      <Container className="vertical">
        <Spacing mTop={theme.xlarge} mBottom={theme.xlarge}>
          <MdKeyboardBackspace />
        </Spacing>

        <Container className="horizontal" style={{ alignSelf: 'center' }}>
          <ImgContainer image="http://books.google.com/books/content?id=Wx1dLwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api" />

          <Card>
            <Spacing mTop={theme.medium} mBottom={theme.medium}>
              <Container
                className="vertical grow"
                height="auto"
                justify="center"
              >
                {/* <ArticleTitle as="h5" fs="14px" lh="1">
                  {library.title}
                </ArticleTitle>
                <Text as="p" fs="8px" color={theme.naturalDark}>
                  {library.publishedDate}
                </Text>

                {library.author.map(value => {
                  return (
                    <div key={value} style={{ display: 'inline' }}>
                      <Text as="p" fs="8px" color={theme.naturalDark}>
                        {value}
                      </Text>
                    </div>
                  );
                })}
                {library.comments}
                <Button>借りる</Button>
                <Border bottom="1px" color={theme.naturalDark} /> */}
              </Container>
            </Spacing>
          </Card>
        </Container>
      </Container>
    </Layout>
  );
};

export default LibraryDetail;
