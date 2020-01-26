import styled from 'styled-components';
import { theme } from 'components/atoms/theme';

export const Text = styled.span`
  color: ${props => props.color || theme.dark};
  display: ${props => props.display || 'initial'};
  text-align: ${props => props.align || 'inherit'};

  /* できるだけclassNameを使う */
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
  line-height: ${props => props.lh};
  letter-spacing: ${props => props.ls};

  &.link {
    cursor: pointer;
    text-decoration: none;
    &:hover {
      text-decoration-color: ${props => props.color};
      text-decoration: underline;
    }
  }

  &.gutterBottom {
    margin-bottom: 4px;
  }
  &.h1 {
    font-weight: 300;
    font-size: 6rem;
    line-height: 1.167;
    letter-spacing: -0.01562em;
  }
  &.h2 {
    font-weight: 300;
    font-size: 3.75rem;
    line-height: 1.2;
    letter-spacing: -0.00833em;
  }
  &.h3 {
    font-weight: 400;
    font-size: 3rem;
    line-height: 1.167;
    letter-spacing: 0em;
  }
  &.h4 {
    font-weight: 400;
    font-size: 2.125rem;
    line-height: 1.235;
    letter-spacing: 0.00735em;
  }
  &.h5 {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.334;
    letter-spacing: 0em;
  }
  &.h6 {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.6;
    letter-spacing: 0.0075em;
  }
  &.subtitle1 {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.75;
    letter-spacing: 0.00938em;
  }
  &.subtitle2 {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.57;
    letter-spacing: 0.00714em;
  }
  &.body1 {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.00938em;
  }
  &.body2 {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.43;
    letter-spacing: 0.01071em;
  }
  &.caption {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.66;
    letter-spacing: 0.03333em;
  }
  &.button {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
  }
  &.outline {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 2.66;
    letter-spacing: 0.08333em;
    text-transform: uppercase;
  }
  &.japanese {
    line-height: 2;
  }
`;

export const Span = styled.span`
  font-weight: 500;
`;

export const Strong = styled.span`
  font-weight: 700;
`;
