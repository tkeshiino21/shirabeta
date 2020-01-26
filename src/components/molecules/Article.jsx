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

const Article = ({ post, counts, reactions }) => {
  const link = post.link;
  const outer = post.outer;
  const title = post.title;
  const author = post.author;
  const date = post.date;
  return (
    <div style={{ width: 'auto' }}>
      <Spacing mTop={theme.small} />
      <Box>
        <Box className="vertical" grow={1} width="70%">
          <Block>
            {outer === true ? (
              <Text
                as="a"
                className="body2 link"
                // to={outer === false ? link : null}
                href={link}
                target={'_blank'}
                rel={'noopener noreferrer'}
              >
                <Span>{title} </Span>
              </Text>
            ) : (
              <Text as={Link} className="body2 link" to={link}>
                <Span>{title} </Span>
              </Text>
            )}

            <div>
              {author.map(name => {
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
          </Block>
        </Box>
        <Box
          basis="68px"
          justify="flex-end"
          style={{ border: '1px solid grey' }}
        >
          <CounterReactions reactions={reactions} counts={counts} />
        </Box>
      </Box>
      <Divider />
    </div>
  );
};

export default Article;
