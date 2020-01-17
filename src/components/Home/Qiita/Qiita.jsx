import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { theme, Container, Spacing, Text } from 'Shared';
import Filter from 'components/Home/Qiita/Filter';
import {
  ArticleTitle,
  SortContainer,
  FavoriteIconContainer,
  NotFavoriteIcon,
  SortButton,
} from 'components/Home/Style';

const Qiita = ({ onRequest, fetchedPost, isLoading }) => {
  const [tag, setTag] = useState({ tagName: '本' });
  const handleFilter = e => {
    return setTag({ tagName: e.target.value });
  };
  const [sort, setSort] = useState(false);
  const enableLikeSort = () => {
    return setSort(true);
  };
  const disableLikeSort = () => {
    return setSort(false);
  };
  const sortPost = () => {
    const myPost = fetchedPost.concat();
    return !fetchedPost
      ? null
      : myPost.sort((a, b) => {
          return b.likes_count - a.likes_count;
        });
  };
  const sortedPost = sort === true ? sortPost() : fetchedPost;
  console.log(sort);
  useEffect(
    () => onRequest(tag.tagName),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tag],
  );

  if (isLoading !== false || !fetchedPost) return <h1>isLoading</h1>;
  else {
    return (
      <div style={{ position: 'relative' }}>
        <Container wrap>
          <Filter tag={tag} handleClick={handleFilter} />
          <SortContainer>
            <SortButton
              className={sort === true ? 'selected' : 'unSelected'}
              onClick={enableLikeSort}
            >
              人気順
            </SortButton>
            <Text> | </Text>
            <SortButton
              className={sort === true ? 'unSelected' : 'selected'}
              onClick={disableLikeSort}
            >
              新着順
            </SortButton>
          </SortContainer>
        </Container>
        {sortedPost.map(post => {
          return (
            <Container
              key={post.id}
              style={{ borderBottom: `1px solid ${theme.naturalDark}` }}
            >
              <Container className="vertical" width="85%">
                <Spacing mTop={theme.large} />
                <a href={`https://qiita.com/items/${post.id}`}>
                  <ArticleTitle as="h5" fs="14px" lh="1">
                    {post.title}
                  </ArticleTitle>
                </a>
                <Text as="p" fs="8px" color={theme.naturalDark}>
                  {moment(post.created_at).format(
                    'dddd, MMMM Do YYYY, h:mm:ss a',
                  )}
                </Text>
              </Container>
              <FavoriteIconContainer>
                <button style={{ border: 'none', cursor: 'default' }}>
                  <NotFavoriteIcon />
                  {post.likes_count}
                </button>
              </FavoriteIconContainer>
            </Container>
          );
        })}
      </div>
    );
  }
};

export default Qiita;
