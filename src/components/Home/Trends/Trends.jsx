import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';
import SubMenu from 'Layout/SubMenu/MenuLinks';
import { MdTrendingUp, MdFlag } from 'react-icons/md';
import { theme, media, Text, Card, Container, Spacing, Border } from 'Shared';
import Filter from 'components/Home/Trends/Filter';

const listItems = [
  {
    name: 'trends',
    label: 'トレンド',
    icon: MdTrendingUp,
  },
  {
    name: 'milestones',
    label: '定番',
    icon: MdFlag,
  },
];

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
  const [tag, setTag] = useState({ tagName: '本' });
  const handleClick = e => {
    return setTag({ tagName: e.target.value });
  };
  const [posts, setPosts] = useState([1, 2, 3]);
  const url = `https://qiita.com/api/v2/tags/${tag.tagName}/items?page=1&per_page=10`;
  const fetchResource = async () => {
    const response = await axios.get(url);
    setPosts(response.data);
  };
  useEffect(() => {
    fetchResource().catch(error => {
      return <h1>{error}</h1>;
    });
  }, [tag]);

  return (
    <ResponsiveContainer height="auto">
      {/* {console.log(posts)} */}
      {console.log(tag)}
      <SubMenu listItems={listItems} />
      <Spacing mRight="-5px" />
      <Container width="100%" height="80%">
        <ResponsiveCard>
          <Container className="vertical" height="60%">
            <Spacing mTop="-14px" />
            <Filter tag={tag} handleClick={handleClick} />
            {posts.map(post => {
              return (
                <li key={post.id}>
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
          </Container>
        </ResponsiveCard>
      </Container>
    </ResponsiveContainer>
  );
};

export default Trends;
