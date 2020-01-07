import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { theme } from 'Shared/theme';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html{
    font-size: ${theme.fontSize};
  }
  body {
    margin: 0;
    background-color: ${theme.natural};
    color: ${theme.greyDarker};
    font-family: ${theme.fontFamily};
    font-size: 1.6rem;
    height: 100%;
    line-height: ${theme.lineHeight};
    word-wrap: break-word;
  }
  a {
    cursor: pointer;

    &:link,
    &:visited {
      color: ${theme.greyDarker};
      text-decoration: none;
    }

    &:hover {
      opacity: .9;
      text-decoration: underline;
    }
  }
  button{
    cursor: pointer;
    outline: none;
    appearance: none;
  }
  h1,h2,h3,h4,h5, h6 {
    font-weight: 800;
  }
  li {
    list-style: none;
  }
  input {
    padding: 0;
    border: none;
    border-radius: 0;
    outline: none;
    background: none;
  }

`;

export default GlobalStyle;
