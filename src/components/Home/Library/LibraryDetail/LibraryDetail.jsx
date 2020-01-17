import React, { useEffect } from 'react';
import Layout from 'components/Layout';
import { MdKeyboardBackspace } from 'react-icons/md';
import { ArticleTitle } from 'components/Home/Style';
import {
  theme,
  Text,
  Button,
  Border,
  Card,
  Container,
  Spacing,
  ImgContainer,
} from 'Shared';
import { useHistory, useParams } from 'react-router-dom';

const LibraryDetail = ({ uid, isLoading, library, onRequest, onBorrow }) => {
  const slug = useParams();
  const ISBN = slug.id;
  useEffect(
    () => onRequest(ISBN),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [LibraryDetail],
  );
  const history = useHistory();
  console.log('lib', library);
  const BookData = () => {
    if (library === '') {
      return null;
    } else if (library === undefined) {
      return null;
    } else if (library.author === undefined) {
      return null;
    } else {
      return (
        <Container className="vertical grow" height="auto" justify="center">
          <ArticleTitle as="h5" fs="14px" lh="1">
            {library.title}
          </ArticleTitle>
          <Text as="p" fs="8px" color={theme.naturalDark}>
            {library.publishedDate}
          </Text>
          {library.author.map(name => {
            return (
              <div key={name} style={{ display: 'inline' }}>
                <Text as="p" fs="8px" color={theme.naturalDark}>
                  {name}
                </Text>
              </div>
            );
          })}
          {console.log(library.author)}
          <Button onClick={() => onBorrow(ISBN, library.title, uid)}>
            借りる
          </Button>
          <Border bottom="1px" color={theme.naturalDark} />
        </Container>
      );
    }
  };
  if (isLoading === true) return <h1>isLoading</h1>;
  return (
    <Layout>
      <Container className="vertical">
        <Spacing mTop={theme.xlarge} mBottom={theme.xlarge}>
          <Button onClick={() => history.goBack()} className="text xlarge">
            <MdKeyboardBackspace />
          </Button>
        </Spacing>
        <Container className="horizontal" style={{ alignSelf: 'center' }}>
          <ImgContainer image="http://books.google.com/books/content?id=Wx1dLwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api" />
          <Card>
            <Spacing mTop={theme.medium} mBottom={theme.medium}>
              <BookData />
            </Spacing>
          </Card>
        </Container>
      </Container>
    </Layout>
  );
};

export default LibraryDetail;
