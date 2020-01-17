import styled from 'styled-components';
import { theme, Button, Container, Text } from 'Shared';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

// TODO: 重複箇所のリファクタリング
// Libraryとの重複がある

export const FavoriteIconContainer = styled.div`
  display: flex;
  width: 100px;
  justify-content: flex-end;
`;

export const NotFavoriteIcon = styled(MdFavoriteBorder)`
  color: ${theme.naturalDark};
  position: relative;
  top: 2px;
  height: 12px;
  width: 12px;
  margin-right: 2px;
`;

export const FavoriteIcon = styled(MdFavorite)`
  color: ${theme.naturalDark};
  position: relative;
  top: 3px;
  height: 15px;
  width: 15px;
  margin-right: 2px;
`;

export const SortContainer = styled(Container)`
  justify-content: flex-end;
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
  &.fixedWidth {
    width: 120px;
  }
`;
