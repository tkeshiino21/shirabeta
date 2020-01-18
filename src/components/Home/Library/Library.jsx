import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Filter from 'components/Home/Library/Filter';
import { theme, Button, Container, Spacing, Text } from 'Shared';
import {
  ArticleTitle,
  FavoriteIconContainer,
  NotFavoriteIcon,
  FavoriteIcon,
} from 'components/Home/Style';

const Library = ({
  onRequest,
  onLikesRequest,
  onLike,
  isLoading,
  uid,
  likes,
  library,
  listen,
}) => {
  const [tag, setTag] = useState({ tagName: '本' });
  const handleFilter = e => {
    return setTag({ tagName: e.target.value });
  };
  useEffect(() => {
    onRequest();
    onLikesRequest(uid);
  }, [onRequest, onLikesRequest, uid]);
  if (isLoading === true) return <h1>isLoading</h1>;
  if (library === '') {
    return null;
  } else if (library === undefined) {
    return null;
  } else {
    return (
      <div>
        {console.log(listen)}
        {console.log('lib', library)}
        <Filter tag={tag} handleClick={handleFilter} />
        {library === null
          ? null
          : library.map((doc, id, index) => (
              <Container
                key={id}
                style={{
                  borderBottom: `1px solid ${theme.naturalDark}`,
                }}
              >
                <Container className="vertical" width="85%">
                  <Spacing mTop={theme.large} />
                  <Link to={`/library/${doc.ISBN}`}>
                    <ArticleTitle as="h5" fs="14px" lh="1.2">
                      {doc.title}
                    </ArticleTitle>
                  </Link>
                  <Container>
                    {doc.author === undefined
                      ? null
                      : doc.author.map(name => {
                          return (
                            <div key={name}>
                              <Text
                                as="p"
                                fs="8px"
                                color={theme.naturalDark}
                                style={{ marginRight: theme.small }}
                              >
                                {name}
                              </Text>
                            </div>
                          );
                        })}
                  </Container>
                  <Text as="p" fs="8px" color={theme.naturalDark}>
                    {doc.publishedDate}
                  </Text>
                </Container>
                <FavoriteIconContainer>
                  <Button
                    value={id}
                    onClick={() => onLike(doc.ISBN, uid)}
                    className="text"
                  >
                    {likes === undefined ||
                    likes === '' ||
                    likes.includes(doc.ISBN) ? (
                      <FavoriteIcon />
                    ) : (
                      <NotFavoriteIcon />
                    )}
                    {doc.likesCount}
                  </Button>
                </FavoriteIconContainer>
              </Container>
            ))}
      </div>
    );
  }
};

export default Library;
