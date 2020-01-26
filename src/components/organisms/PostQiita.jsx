import React, { useEffect, useState } from 'react';
import Article from 'components/molecules/Article';
import SearchQiita from 'components/organisms/SearchQiita';
import {
  Loader,
  Block,
  Box,
  Paper,
  Container,
  Spacing,
  theme,
} from 'components/atoms';
import moment from 'moment';

const PostQiita = ({ onRequest, isLoading, fetchedPosts }) => {
  const [tagName, setTagName] = useState('本');
  // const [title, setTitle] = useState('本');
  const [order, setOrder] = useState('新着順');
  const handleTag = e => setTagName(e.target.value);
  const handleTitle = e => setTagName(e.target.value);
  const handleOrder = e => setOrder(e.target.value);

  useEffect(() => onRequest(tagName), [tagName, setTagName, onRequest]);
  const Posts = () => {
    const copiedPosts = fetchedPosts.concat();
    const sortedPosts = copiedPosts.sort((a, b) => {
      return b.likes_count - a.likes_count;
    });
    const postItems = order === '人気順' ? sortedPosts : fetchedPosts;
    return postItems.map(fetchedPost => {
      const post = {
        title: fetchedPost.title,
        author: [fetchedPost.user.id],
        date: moment(fetchedPost.created_at).format('YYYY-MM-DD'),
        link: `https://qiita.com/${fetchedPost.user.id}/items/${fetchedPost.id}`,
        outer: true,
      };
      const counts = {
        likesCount: fetchedPost.likes_count,
        commentsCount: fetchedPost.comments_count,
      };
      return (
        <Article
          post={post}
          reactions={{ myLikes: false, myComments: false }}
          counts={counts}
        />
      );
    });
  };
  if (isLoading !== false) {
    return <Loader />;
  } else {
    return (
      <Paper>
        <Container>
          <Block>
            <SearchQiita
              handles={{
                handleTag: handleTag,
                handleTitle: handleTitle,
                handleOrder: handleOrder,
              }}
            />
          </Block>
          <Spacing mTop={theme.medium} />
          <Posts />
          {console.log(fetchedPosts)}
        </Container>
      </Paper>
    );
  }
};

export default PostQiita;
