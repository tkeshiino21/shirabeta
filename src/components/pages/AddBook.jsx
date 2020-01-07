import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { theme, Border, Text, Container, Card, Spacing, Strong } from 'Shared';
import Layout from 'Layout';

const AddBook = () => {
  const [result, setResult] = useState({
    id: '',
    title: '',
    subtitle: '',
    authors: [],
    publishedDate: '',
  });
  const [query, setQuery] = useState({ value: '' });
  const handleChange = e => {
    return setQuery({ value: e.target.value });
  };
  const baseURL = 'https://www.googleapis.com/';
  const ISBNURL = `${baseURL}books/v1/volumes?q=isbn:${query.value}`;
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(ISBNURL);
      if (response.data.totalItems === 1) {
        const formatData = () => {
          response.data.items.map(item => {
            // console.log(item);
            return setResult({
              id: item.id,
              title: item.volumeInfo.title,
              subtitle: item.volumeInfo.subtitle,
              authors: [item.volumeInfo.authors],
              publishedDate: item.volumeInfo.publishedDate,
            });
          });
        };
        formatData();
      }
    };
    fetchData();
  }, [ISBNURL, query]);

  const FetchedContents = () => {
    if (result.id === '') {
      return <h1>該当する結果はありません。</h1>;
    }

    return (
      <>
        <Text as="h3" fs="18px" lh="1" color={theme.dark}>
          {result.title}
        </Text>
        <li>Author:{result.authors}</li>
        <Text as="p" fs="12px" color={theme.dark}>
          {result.subtitle}
        </Text>
        <Text as="p" fs="12px" color={theme.naturalDark}>
          {result.publishedDate}
        </Text>
      </>
    );
  };

  return (
    <Layout>
      <Container>
        <Container
          width="100%"
          height="80%"
          style={{ minHeight: '70vh' }}
          className="vertical"
        >
          <Spacing mTop="100px" />
          <Card>
            <Container className="vertical">
              <Container>
                {/* <Spacing mTop="200px" />
                <label htmlFor="isbn">ISBN</label>
                <Spacing mRight={theme.small} /> */}
                <Strong>
                  <input
                    id="isbn"
                    type="text"
                    onChange={handleChange}
                    value={query.value}
                  />
                  <Border bottom="1px" color="#aaaaaa" width="160px" />
                </Strong>
              </Container>
            </Container>
          </Card>
        </Container>
        <Container
          width="50vw"
          height="80%"
          style={{ minHeight: '70vh' }}
          className="vertical"
        >
          <Spacing mTop="100px" />
          <Card width="50vw">
            <Container className="vertical">
              {result.item === '' ? (
                <h1>検索に該当する結果はありません。</h1>
              ) : (
                <FetchedContents />
              )}
            </Container>
          </Card>
        </Container>
        {/* {console.log('result:', result)} */}
      </Container>
    </Layout>
  );
};

export default AddBook;
