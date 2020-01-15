import styled from 'styled-components';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { theme, Button } from 'Shared';

export const FavoriteIcon = styled.button`
  color: ${theme.naturalDark};
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  margin: 0;
  padding: 0;
  width: 780px;
  height: 500px;
  background: white;
  z-index: 1;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.2);
`;

export const BackDrop = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
`;
