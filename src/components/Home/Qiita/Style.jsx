import styled from 'styled-components';
import { theme, media, Button, Card, Container, Text } from 'Shared';

// TODO: 重複箇所のリファクタリング
// Libraryとの重複がある

export const FavoriteIcon = styled.button`
  color: ${theme.primary};
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
`;

export const SortControl = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const SortButton = styled.button`
  border: none;
  &.selected {
    color: ${theme.primary};
  }
  &.unSelected {
    color: ${theme.naturalDark};
  }
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
