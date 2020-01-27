import React from 'react';
import { theme, Box, Span, Text, Tag, TagWrapper } from 'components/atoms';
import CounterReactions from 'components/molecules/CounterReactions';

const BookDetail = ({ fetchedDetail, collation, counts }) => {
  const { title } = fetchedDetail;
  const { author } = fetchedDetail;
  const date = fetchedDetail.publishedDate;
  const catergory = fetchedDetail.category;
  const { description } = fetchedDetail;

  return (
    <Box height="auto">
      <Box className="vertical" basis="auto">
        <CounterReactions collation={collation} counts={counts} />
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
                    {name}&emsp;
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
