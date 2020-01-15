import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { theme, Border, Spacing, Text } from 'Shared';
import { ArticleTitle } from 'components/Home/Qiita/Style';
import { FavoriteIcon } from 'components/Home/Library/Style';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

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
      {library.querySnapshot.docs
        ? library.querySnapshot.docs
            .map(eachDocument => {
              {
                /* console.log('big', eachDocument); */
              }
              return eachDocument.data();
            })
            .map((doc, id, index) => (
              <div style={{ position: 'relative' }} key={id}>
                <Spacing mTop={theme.large} />
                <Link to={`/library/${library.id}`}>
                  <ArticleTitle as="h5" fs="14px" lh="1">
                    {doc.title}
                  </ArticleTitle>
                  {console.log(library.querySnapshot.docs.data())}
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
                <FavoriteIcon value={id} onClick={favoriteIconHandler}>
                  <span>
                    {favorite[id].likes === true ? (
                      <MdFavorite
                        style={{
                          position: 'relative',
                          top: '3px',
                          height: '15px',
                          width: '15px',
                          marginRight: '2px',
                        }}
                      />
                    ) : (
                      <MdFavoriteBorder
                        style={{
                          position: 'relative',
                          top: '2px',
                          height: '12px',
                          width: '12px',
                          marginRight: '2px',
                        }}
                      />
                    )}
                  </span>
                  {initState[id].likes + (favorite[id].likes === true ? 1 : 0)}
                </FavoriteIcon>
                <Border bottom="1px" color={theme.naturalDark} />
              </div>
            ))
        : null}
    </div>
  );
};

export default Library;
