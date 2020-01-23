import React from 'react';
import { Link } from 'react-router-dom';
import { theme, Box, Block, Spacing, Span, Text } from 'components/atoms';
import CounterReactions from 'components/molecules/CounterReactions';

const Article = ({ post, counts }) => {
  return (
    <Block>
      <Spacing mTop={theme.small} />
      <Box>
        <Box className="vertical" width="70%">
          <Block>
            <Text
              as={Link}
              className="body2 link"
              to={post.link}
              target={post.outer ? '_blank' : ''}
              rel={post.outer ? 'noopener noreferrer' : ''}
            >
              <Span>{post.title} </Span>
            </Text>
            <div>
              {post.author === undefined
                ? null
                : post.author.map(name => {
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
              {post.date}
            </Text>
          </Block>
        </Box>
        <Box
          basis="74px"
          justify="flex-end"
          style={{ border: '1px solid grey' }}
        >
          <CounterReactions counts={counts} />
        </Box>
      </Box>
      <hr />
    </Block>
  );
};

export default Article;
