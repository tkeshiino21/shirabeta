import styled, { keyframes } from 'styled-components';
import { theme } from './theme';
import { Image } from './Layout';
import loader from 'images/loader.gif';

export const Loader = styled.div`
  display: absolute;
  background-position: center;
  background-image: url(${loader});
  background-repeat: no-repeat;
  width: 1000px;
  height: 200px;
`;

/* The snackbar */
const fadein = keyframes`
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
`;
const fadeout = keyframes`
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
`;
export const Snackbar = styled.button`
  min-width: 250px;
  margin-left: -125px;
  background-color: ${theme.darkGrey};
  color: ${theme.light};
  text-align: center;
  border-radius: 2px;
  padding: ${theme.small};
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;

  &.show {
    visibility: visible;
    animation: ${fadein} 0.5s, ${fadeout} 0.5s 2.5s;
  }
  &.hidden {
    visibility: hidden !important;
    display: hidden !important;
  }
`;
