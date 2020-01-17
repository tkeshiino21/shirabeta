import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { theme, Border, Spacing, Text } from 'Shared';
import {
  ArticleTitle,
  FavoriteIconContainer,
  NotFavoriteIcon,
  FavoriteIcon,
} from 'components/Home/Style';

const Library = ({
  onRequest,
  onLike,
  isLoading,
  // uid,
  likes,
  library,
  listen,
}) => {
  const uid = '1245';
  useEffect(() => onRequest(uid), [Library]);
  const testArray = ['4839925232', '9784274068560'];
  if (isLoading === true) return <h1>isLoading</h1>;
  if (library === '') {
    return null;
  } else if (library === undefined) {
    return null;
  } else {
    return (
      <div>
        {console.log('listen', listen.docs)}
        {library === undefined
          ? null
          : library
              .map(queryDocumentSnapshot => {
                {
                  /* {
                console.log(queryDocumentSnapshot);
              } */
                }
                return queryDocumentSnapshot.data();
              })
              .map((doc, id, index) => (
                <div style={{ position: 'relative' }} key={id}>
                  <Spacing mTop={theme.large} />
                  <Link to={`/library/${doc.ISBN}`}>
                    <ArticleTitle as="h5" fs="14px" lh="1">
                      {doc.title}
                    </ArticleTitle>
                  </Link>
                  <Text as="p" fs="8px" color={theme.naturalDark}>
                    {doc.publishedDate}
                  </Text>
                  {doc.author.map(name => {
                    return (
                      <div key={name} style={{ display: 'inline' }}>
                        <Text as="p" fs="8px" color={theme.naturalDark}>
                          {name}
                        </Text>
                      </div>
                    );
                  })}
                  <FavoriteIconContainer
                    value={id}
                    onClick={() => onLike(doc.ISBN, doc.title)}
                  >
                    <span>
                      {likes === undefined || testArray.includes(doc.ISBN) ? (
                        <FavoriteIcon />
                      ) : (
                        <NotFavoriteIcon />
                      )}
                    </span>
                    {doc.likesCount}
                  </FavoriteIconContainer>
                  <Border bottom="1px" color={theme.naturalDark} />
                </div>
              ))}
      </div>
    );
  }
};

export default Library;
