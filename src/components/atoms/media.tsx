import styled, { css } from 'styled-components';

export const media = {
  xs: (...args: any) => css`
    @media (max-width: 320px) {
      ${css(args)};
    }
  `,
  sm: (...args: any) => css`
    @media (max-width: 600px) {
      ${css(args)};
    }
  `,
  md: (...args: any) => css`
    @media (max-width: 960px) {
      ${css(args)};
    }
  `,
  lg: (...args: any) => css`
    @media (max-width: 1280px) {
      ${css(args)};
    }
  `,
  xl: (...args: any) => css`
    @media (max-width: 1920px) {
      ${css(args)};
    }
  `,
};

export const Collapse = styled.div`
  &.xs {
    ${media.xs`
      display: none;
    `}
  }
  &.sm {
    ${media.sm`
      display: none;
    `}
  }
  &.md {
    ${media.md`
      display: none;
    `}
  }
  &.lg {
    ${media.lg`
      display: none;
    `}
  }
  &.xl {
    ${media.xl`
      display: none;
    `}
  }
`;
