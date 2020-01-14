import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { theme, Border, Spacing, Text } from 'Shared';
import Filter from 'components/Home/Qiita/Filter';
import { ArticleTitle } from 'components/Home/Qiita/Style';
import { FavoriteIcon, NotFavoriteIcon } from 'components/Home/Qiita/Style';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

const Qiita = ({ onRequest, fetchedPost, isLoading }) => {
  const [tag, setTag] = useState({ tagName: '本' });
  const handleClick = e => {
    return setTag({ tagName: e.target.value });
  };
  useEffect(
    () => onRequest(tag.tagName),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tag],
  );
  if (isLoading !== false) return <h1>isLoading</h1>;
  else {
    return (
      <div>
        <Filter tag={tag} handleClick={handleClick} />
        {!fetchedPost
          ? null
          : fetchedPost.map(post => {
              return (
                <li key={post.title} style={{ position: 'relative' }}>
                  {console.log(post.id)}
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
                  {post.reactions_count}
                  <FavoriteIcon disabled>
                    <MdFavorite />
                    {post.likes_count}
                  </FavoriteIcon>
                  <Border bottom="1px" color={theme.naturalDark} />
                </li>
              );
            })}
      </div>
    );
  }
};

export default Qiita;
