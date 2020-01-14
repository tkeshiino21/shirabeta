import React, { useState, useEffect } from 'react';
import { theme, Border, Spacing, Text } from 'Shared';
import { ArticleTitle } from 'components/Home/Qiita/Style';
import { FavoriteIcon, NotFavoriteIcon } from 'components/Home/Library/Style';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

const Library = ({ onRequest, isLoading, library }) => {
  useEffect(() => onRequest(), [Library]);
  const [favorite, setFavorite] = useState([
    { index: 0, value: { name: 'And', value: 45 } },
    { index: 1, value: { name: 'Edward', value: 21 } },
    { index: 2, value: { name: 'Magnetic', value: 13 } },
    { index: 3, value: { name: 'Sharpe', value: 37 } },
    { index: 4, value: { name: 'The', value: -12 } },
    { index: 5, value: { name: 'Zeros', value: 37 } },
    { index: 6, value: { name: 'Zeros', value: 37 } },
    { index: 7, value: { name: 'Zeros', value: 37 } },
    { index: 8, value: { name: 'Zeros', value: 37 } },
    { index: 9, value: { name: 'Zeros', value: 37 } },
    { index: 10, value: { name: 'Zeros', value: 37 } },
  ]);
  const favoriteIconHandler = e => {
    setFavorite(...favorite, [
      {
        id: e.currentTarget.value,
        count: favorite.count + (favorite.liked ? -1 : 1),
        liked: true,
      },
    ]);
    console.log(e.currentTarget.value);
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
                <ArticleTitle as="h5" fs="14px" lh="1">
                  {doc.title}
                </ArticleTitle>
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
                  <MdFavorite />
                </FavoriteIcon>
                {favorite[0].liked}
                {favorite[id].value.name}
                <Border bottom="1px" color={theme.naturalDark} />
              </div>
            ))
        : null}
    </div>
  );
};

export default Library;
