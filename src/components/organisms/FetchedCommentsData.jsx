import React from 'react';
import { theme, Spacing, Container, Text } from 'components/atoms';

const FetchedCommentsData = ({ comments }) => {
  return comments.map(comment => (
    <Container
      key={comment.userName}
      style={{
        borderBottom: `1px solid ${theme.naturalDark}`,
      }}
    >
      <Container className="vertical" width="85%">
        <Spacing mTop={theme.xlarge} />
        <Text color={theme.dark}>{comment.comment}</Text>
        <Container>
          <Text
            as="p"
            fs="8px"
            color={theme.naturalDark}
            style={{ marginRight: theme.small }}
          >
            {comment.userName}
          </Text>
        </Container>
        <Text as="p" fs="8px" color={theme.naturalDark}>
          {comment.commentDate}
        </Text>
      </Container>
    </Container>
  ));
};

export default FetchedCommentsData;
