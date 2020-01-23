import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { theme } from 'components/atoms/theme';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  ${'' /*----------- basis ----------- */}
  *{
    font-family:  'Titillium Web', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Hiragino Sans", "Noto Sans CJK JP", "Original Yu Gothic", "Yu Gothic", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans Emoji" !important
  }
  html{
    font-size:  16px;
  }
  body {
    margin: 0;
    background-color: ${theme.natural};
    color: ${theme.dark};
    font-size: 16px;
  }

  ${'' /*----------- cutomReset -----------*/}
  a {
    &:link,
    &:visited {
      text-decoration: none;
    }
  }
  button{
    outline: none;
    appearance: none;
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
