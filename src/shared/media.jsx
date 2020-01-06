import { css } from 'styled-components';

export const media = {
  xs: (...args) => css`
    @media (max-width: 400px) {
      ${css(...args)};
    }
  `,
  sm: (...args) => css`
    @media (max-width: 600px) {
      ${css(...args)};
    }
  `,
  md: (...args) => css`
    @media (max-width: 960px) {
      ${css(...args)};
    }
  `,
  lg: (...args) => css`
    @media (max-width: 1280px) {
      ${css(...args)};
    }
  `,
  xl: (...args) => css`
    @media (max-width: 1920px) {
      ${css(...args)};
    }
  `,
};
