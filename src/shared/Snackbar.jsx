import styled, { keyframes } from 'styled-components';

const fadein = keyframes`
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
`;

const fadeout = keyframes`
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
`;
/* The snackbar - position it at the bottom and in the middle of the screen */
export const Snackbar = styled.button`
  min-width: 250px; /* Set a default minimum width */
  margin-left: -125px; /* Divide value of min-width by 2 */
  background-color: #333; /* Black background color */
  color: #fff; /* White text color */
  text-align: center; /* Centered text */
  border-radius: 2px; /* Rounded borders */
  padding: 16px; /* Padding */
  position: fixed; /* Sit on top of the screen */
  z-index: 1; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  bottom: 30px; /* 30px from the bottom */

  &.show {
    visibility: visible;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: ${fadein} 0.5s, ${fadeout} 0.5s 2.5s;
  }

  &.hidden {
    visibility: hidden !important;
    display: hidden !important;
  }
  &.showhidden {
    visibility: hidden !important;
    display: hidden !important;
  }
`;
