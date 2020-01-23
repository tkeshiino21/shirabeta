import React, { useEffect, useState } from 'react';
import Article from 'components/molecules/Article';
import SearchQiita from 'components/organisms/SearchQiita';
import ShouldLoading from 'components/molecules/ShouldLoading';

const PostQiita = ({ onRequest, isLoading, fetchedPosts }) => {
  const [tagName, setTagName] = useState('本');
  const handleTag = e => {
    setTagName(e.target.value);
  };
  const [title, setTitle] = useState('本');
  const handleTitle = e => {
    setTitle(e.target.value);
  };
  const [order, setOrder] = useState('本');
  const handleOrder = e => {
    setOrder(e.target.value);
  };
  useEffect(() => onRequest(tagName), [tagName]);
  return (
    <ShouldLoading isLoading={isLoading}>
      <SearchQiita
        handles={{
          handleTag: handleTag,
          handleTitle: handleTitle,
          handleOrder: handleOrder,
        }}
      />
      {fetchedPosts.map(fetchedPost => {
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
    </ShouldLoading>
  );
};

export default PostQiita;
