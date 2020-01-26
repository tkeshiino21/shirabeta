import React from 'react';
import { Link } from 'react-router-dom';
import {
  theme,
  Box,
  Button,
  Block,
  Span,
  Text,
  Tag,
  TagWrapper,
} from 'components/atoms';
import CounterReactions from 'components/molecules/CounterReactions';

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
    <Box height="auto">
      <Box className="vertical" basis="auto">
        <CounterReactions reactions={reactions} counts={counts} />
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
                    className="subtitle2"
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
        <TagWrapper>
          <Tag>{catergory}</Tag>
        </TagWrapper>
        <Text as="p" className="body2 japanese">
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default BookDetail;
