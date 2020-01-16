import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { theme, Border, Spacing, Text } from 'Shared';
import {
  ArticleTitle,
  FavoriteIconContainer,
  NotFavoriteIcon,
  FavoriteIcon,
} from 'components/Home/Style';

const Library = ({ onRequest, isLoading, library }) => {
  useEffect(() => onRequest(), [Library]);
  const initState = [
    { likes: 0 },
    { likes: 2 },
    { likes: 4 },
    { likes: 6 },
    { likes: 8 },
    { likes: 9 },
    { likes: 7 },
    { likes: 5 },
    { likes: 3 },
    { likes: 1 },
  ];
  const [favorite, setFavorite] = useState([
    { like: false },
    { like: false },
    { like: false },
    { like: false },
    { like: false },
    { like: false },
    { like: false },
    { like: false },
    { like: false },
    { like: false },
  ]);
  const favoriteIconHandler = e => {
    setFavorite([
      ...favorite,
      (favorite[e.currentTarget.value].likes = !favorite[e.currentTarget.value]
        .likes),
    ]);
    // , favorite[e.currentTarget.value].likes++
    console.log(favorite);
  };
  if (isLoading === true) return <h1>isLoading</h1>;
  return (
    <div>
      {library
        ? library
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
                {doc.author.map(value => {
                  return (
                    <div key={value} style={{ display: 'inline' }}>
                      <Text as="p" fs="8px" color={theme.naturalDark}>
                        {value}
                      </Text>
                    </div>
                  );
                })}
                <FavoriteIconContainer value={id} onClick={favoriteIconHandler}>
                  <span>
                    {favorite[id].likes === true ? (
                      <FavoriteIcon />
                    ) : (
                      <NotFavoriteIcon />
                    )}
                  </span>
                  {initState[id].likes + (favorite[id].likes === true ? 1 : 0)}
                </FavoriteIconContainer>
                <Border bottom="1px" color={theme.naturalDark} />
              </div>
            ))
        : null}
    </div>
  );
};

export default Library;
