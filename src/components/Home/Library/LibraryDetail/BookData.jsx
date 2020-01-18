import React from 'react';
import { theme, Container, Text } from 'Shared';

const BookData = ({ library }) => {
  if (library === '') {
    return null;
  } else if (library === undefined) {
    return null;
  } else if (library.author === undefined) {
    return null;
  } else {
    return (
      <Container className="vertical grow" height="auto" justify="center">
        <Text as="h1" fs={theme.large} lh="1" color={theme.dark}>
          {library.title}
        </Text>
        {library.author.map(name => {
          return (
            <div key={name} style={{ display: 'inline' }}>
              <Text as="h2" fs={theme.small} color={theme.naturalDark}>
                {name}
              </Text>
            </div>
          );
        })}
        <Text as="p" fs={theme.small} color={theme.naturalDark}>
          {library.publishedDate}
        </Text>

        {console.log(library.author)}
      </Container>
    );
  }
};

export default BookData;
