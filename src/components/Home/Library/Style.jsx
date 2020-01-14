import styled from 'styled-components';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { theme, Button } from 'Shared';

export const FavoriteIcon = styled.button`
  color: ${theme.primary};
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
`;

export const NotFavoriteIcon = styled(MdFavoriteBorder)`
  color: ${theme.naturalDark};
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 20px;
`;
