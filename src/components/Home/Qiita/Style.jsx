import styled from 'styled-components';
import { theme, media, Button, Card, Container, Text } from 'Shared';

export const FavoriteIcon = styled.button`
  color: ${theme.primary};
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
`;

export const ArticleTitle = styled(Text)`
  color: ${theme.dark};
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  :hover {
    cursor: pointer;
    color: ${theme.primary};
    text-decoration: underline;
    text-decoration-color: ${theme.primary};
  }
`;

export const TagSelect = styled(Button)`
  &.activeTag {
    color: ${theme.primary};
    border-bottom: 1px solid grey;
  }
  &.passiveTag {
    color: ${theme.naturalDark};
    border-bottom: 1px solid grey;
  }
`;
