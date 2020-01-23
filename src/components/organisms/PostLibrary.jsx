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

const PostLibrary = ({ uid, onRequest, isLoading, library }) => {
  const [category, setCategory] = useState('');
  const handleCategory = e => {
    setCategory(e.target.value);
  };
  console.log(library);
  const [filter, setFilter] = useState('本');
  const handleFilter = e => {
    setFilter(e.target.value);
  };
  const [order, setOrder] = useState('本');
  const handleOrder = e => {
    setOrder(e.target.value);
  };
  useEffect(() => {
    onRequest(uid);
  }, [category]);
  if (isLoading !== false) {
    return <Loader />;
  } else {
    return (
      <Paper>
        <Container>
          <Block>
            <SearchLibrary
              handles={{
                handleCategory: handleCategory,
                handleFilter: handleFilter,
                handleOrder: handleOrder,
              }}
            />
          </Block>
          <Spacing mTop={theme.small} />
          {library.map(fetchedPost => {
            return (
              <Article
                post={fetchedPost}
                counts={{
                  likesCount: fetchedPost.likes_count,
                  commentsCount: fetchedPost.comments_count,
                }}
              />
            );
          })}
        </Container>
      </Paper>
    );
  }
};

export default PostLibrary;
