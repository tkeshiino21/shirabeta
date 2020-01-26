import React, { useEffect, useState } from 'react';
import Article from 'components/molecules/Article';
import SearchLibrary from 'components/organisms/SearchLibrary';
import {
  Loader,
  Block,
  Paper,
  Container,
  Spacing,
  theme,
} from 'components/atoms';

const PostLibrary = ({ onRequest, isLoading, library, collations }) => {
  const [category, setCategory] = useState('すべて');
  const [filter, setFilter] = useState('すべて');
  const [order, setOrder] = useState('新着順');
  const handleCategory = e => setCategory(e.target.value);
  const handleFilter = e => setFilter(e.target.value);
  const handleOrder = e => setOrder(e.target.value);
  useEffect(() => {
    onRequest(category, filter);
  }, [category, filter, onRequest]);
  const Posts = () => {
    const copiedLibrary = library.concat();
    const sortedLibrary = copiedLibrary.sort((a, b) => {
      return b.likesCount - a.likesCount;
    });
    const libraryItems = order === '人気順' ? sortedLibrary : library;

    return libraryItems.map(fetchedPost => {
      const post = {
        title: fetchedPost.title,
        author: fetchedPost.author,
        date: fetchedPost.publishedDate,
        link: `/library/${fetchedPost.ISBN}`,
        outer: false,
      };
      const counts = {
        likesCount: fetchedPost.likesCount,
        commentsCount: fetchedPost.commentsCount,
      };
      const reactions = {
        myLikes:
          collations === undefined || collations.collationLikes === undefined
            ? []
            : collations.collationLikes.includes(fetchedPost.ISBN),
        myComments:
          collations === undefined || collations.collationComments === undefined
            ? []
            : collations.collationComments.includes(fetchedPost.ISBN),
      };

      return (
        <li key={fetchedPost.ISBN}>
          <Article post={post} reactions={reactions} counts={counts} />
        </li>
      );
    });
  };
  if (isLoading !== false) {
    return <Loader />;
  }

  return (
    <Paper>
      <Container>
        <Spacing mTop={theme.small} />
        <Block>
          <SearchLibrary
            handles={{
              handleCategory,
              handleFilter,
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

export default PostLibrary;
