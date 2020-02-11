import React, { FC } from 'react';
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

type Props = {
  post: {
    link: string;
    outer: boolean;
    title: string;
    author: any;
    date: string;
  };
  counts: any;
  collation: any;
};

const Article: FC<Props> = ({ post, counts, collation }) => {
  const { link } = post;
  const { outer } = post;
  const { title } = post;
  const { author } = post;
  const { date } = post;

  return (
    <div style={{ width: 'auto' }}>
      <Spacing mTop={theme.medium} />
      <Box>
        <Box className="vertical" grow={1} width="68%">
          <Block>
            {outer === true ? (
              <Text
                as="a"
                className="subtitle1 link"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Span>{title} </Span>
              </Text>
            ) : (
              <Text as={Link} className="subtitle1 link" to={link}>
                <Span>{title} </Span>
              </Text>
            )}

            <div>
              {author.map((name: any) => {
                return (
                  <Text
                    key={name}
                    as="p"
                    className="body2"
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
          </Block>
        </Box>
        <Box basis="80px" justify="flex-end">
          <CounterReactions collation={collation} counts={counts} />
        </Box>
      </Box>
      <Divider />
    </div>
  );
};

export default Article;
