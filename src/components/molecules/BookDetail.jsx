import React from 'react';
import { Link } from 'react-router-dom';
import {
  theme,
  Box,
  Block,
  Spacing,
  Span,
  Text,
  Divider,
} from 'components/atoms';
import CounterReactions from 'components/molecules/CounterReactions';

const collationFunc = ({ ISBN, collation }) => {
  const myLikes = collation.likes.include(ISBN);
  const myComments = collation.likes.include(ISBN);
};

const BookDetail = ({ fetchedDetail, collation, counts }) => {
  const title = fetchedDetail.title;
  const author = fetchedDetail.author;
  const date = fetchedDetail.publishedDate;
  const catergory = fetchedDetail.category;
  const description = fetchedDetail.description;
  const reactions = {
    myLikes:
      collation === undefined || collation.collationLikes === undefined
        ? []
        : collation.collationLikes.includes(fetchedDetail.ISBN),
    myComments:
      collation === undefined || collation.collationComments === undefined
        ? []
        : collation.collationComments.includes(fetchedDetail.ISBN),
  };
  console.log(reactions);
  return (
    <Box height="auto" style={{ border: '1px solid grey' }}>
      <Box
        className="vertical"
        basis="auto"
        style={{ border: '1px solid grey' }}
      >
        <CounterReactions reactions={reactions} counts={counts} />
        {console.log(title)}
        <Text as="h2" className="h6">
          <Span>{title} </Span>
        </Text>
        <div>
          {author === undefined
            ? null
            : author.map(name => {
                return (
                  <Text
                    key={name}
                    as="p"
                    className="caption"
                    color={theme.naturalDark}
                    style={{ display: 'inline' }}
                  >
                    {name}　
                  </Text>
                );
              })}
        </div>
        <Text as="p" className="caption" color={theme.naturalDark}>
          {date}
        </Text>
        <Text as="p" className="caption" color={theme.naturalDark}>
          {catergory}
        </Text>
        <Text
          as="p"
          className="body2 japanese"
          style={{ border: '1px solid grey' }}
        >
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default BookDetail;
