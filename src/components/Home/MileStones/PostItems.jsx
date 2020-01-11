import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { theme, Border, Spacing, Text } from 'Shared';
import Filter from 'components/Home/MileStones/Filter';

const PostItems = ({ onRequest, fetchedPost, isLoading }) => {
  const [tag, setTag] = useState({ tagName: '本' });
  const handleClick = e => {
    return setTag({ tagName: e.target.value });
  };
  useEffect(() => onRequest(tag.tagName), [tag]);
  if (isLoading !== false) return <h1>isLoading</h1>;
  else {
    return (
      <div>
        <Filter tag={tag} handleClick={handleClick} />
        <ul>
          {fetchedPost.map(post => {
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
      </div>
    );
  }
};

export default PostItems;
