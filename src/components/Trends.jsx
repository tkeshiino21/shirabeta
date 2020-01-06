import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';
import SubMenu from './App/SubMenu/MenuLinks';
import {
  theme,
  media,
  Text,
  Card,
  Container,
  Spacing,
  Border,
} from '../shared';

const ResponsiveContainer = styled(Container)`
  width: 100%;
  flex-direction: row;
  ${media.md`
    flex-direction: column;
  `}
`;

const ResponsiveCard = styled(Card)`
  display: block;
  height: 60%;
  width: 730px;
  ${media.md`
    max-width: 80vw;
  `}
`;

const Trends = () => {
  const [posts, setPosts] = useState([1, 2, 3]);
  const url = 'https://qiita.com/api/v2/tags/技術書/items?page=1&per_page=10';
  const fetchResource = async () => {
    const response = await axios.get(url);
    setPosts(response.data);
  };
  useEffect(() => {
    fetchResource().catch(error => {
      return <h1>{error}</h1>;
    });
  }, []);

  return (
    <ResponsiveContainer height="auto">
      {/* {console.log(posts)} */}
      <SubMenu />
      <Spacing mRight="-5px" />
      <Container width="100%" height="80%">
        <ResponsiveCard>
          <Container className="vertical" height="60%">
            <ul>
              {posts.map(post => {
                return (
                  <li key={post.title}>
                    <Spacing mTop={theme.large} />
                    <Text
                      as="h5"
                      fs="14px"
                      lh="1"
                      color={theme.dark}
                      display="block"
                      style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {post.title}
                    </Text>
                    <Text as="p" fs="8px" color={theme.naturalDark}>
                      {moment(post.created_at).format(
                        'dddd, MMMM Do YYYY, h:mm:ss a',
                      )}
                    </Text>
                    <Border bottom="1px" color={theme.naturalDark} />
                  </li>
                );
              })}
            </ul>
          </Container>
        </ResponsiveCard>
      </Container>
    </ResponsiveContainer>
  );
};

export default Trends;
