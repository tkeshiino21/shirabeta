import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { theme } from 'Shared/theme';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    font-family:  'Titillium Web', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Hiragino Sans", "Noto Sans CJK JP", "Original Yu Gothic", "Yu Gothic", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans Emoji" !important
  }
  html{
    font-size: 62.5%;
  }
  body {
    margin: 0;
    background-color: ${theme.natural};
    color: ${theme.dark};
    font-size: 1.6em;
    height: 100%;
    line-height: ${theme.lineHeight};
    word-wrap: break-word;
  }
  a {
    cursor: pointer;
    &:link,
    &:visited {
      text-decoration: none;
    }
    &:hover {
      opacity: .9;
      text-decoration: underline;
      text-decoration-color: ${theme.primary};
    }
  }
  button{
    font-size: 1.2rem;
    cursor: pointer;
    outline: none;
    appearance: none;
  }
  h1,h2,h3,h4,h5 {
    font-weight: bold;
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
  label{
    font-size: 1.2rem;
    font-weight: normarl;
  }
`;

export default GlobalStyle;
