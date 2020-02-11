import React, { FC, ChangeEvent, useEffect, useState } from 'react';
import Article from 'components/molecules/Article';
import SearchQiita from 'components/templates/SearchQiita';
import {
  Loader,
  Block,
  Paper,
  Container,
  Spacing,
  theme,
} from 'components/atoms';
import moment from 'moment';

type Props = {
  onRequest: (arg0: string) => void;
  isLoading: boolean;
  fetchedPosts: any;
};

const PostQiita: FC<Props> = ({ onRequest, isLoading, fetchedPosts }) => {
  const [tagName, setTagName] = useState('本');
  const [order, setOrder] = useState('新着順');
  const handleTag = (e: ChangeEvent<HTMLInputElement>) =>
    setTagName(e.target.value);
  const handleTitle = (e: ChangeEvent<HTMLInputElement>) =>
    setTagName(e.target.value);
  const handleOrder = (e: ChangeEvent<HTMLInputElement>) =>
    setOrder(e.target.value);

  useEffect(() => onRequest(tagName), [tagName, setTagName, onRequest]);
  const Posts = () => {
    const copiedPosts = fetchedPosts.concat();
    const sortedPosts = copiedPosts.sort((a: any, b: any) => {
      return b.likes_count - a.likes_count;
    });
    const postItems = order === '人気順' ? sortedPosts : fetchedPosts;

    return postItems.map((fetchedPost: any) => {
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
          key={post.title}
          post={post}
          collation={{ collation: { myLikes: false, myComments: false } }}
          counts={counts}
        />
      );
    });
  };
  if (isLoading !== false) {
    return <Loader />;
  }

  return (
    <Paper>
      <Container>
        <Block>
          <SearchQiita
            handles={{
              handleTag,
              handleTitle,
              handleOrder,
            }}
          />
        </Block>
        <Spacing mTop={theme.medium} />
        <Posts />
      </Container>
    </Paper>
  );
};

export default PostQiita;
