import styled from 'styled-components';
import { theme } from './theme';
import { media } from './media';

export const Text = styled.span`
  display: ${props => props.display};
  text-align: ${props => props.ta};
  font-size: ${props => props.fs};
  color: ${props => props.color};
  font-weight: ${props => props.fw};
  line-height: ${props => props.lh};

  &.responsive {
    ${media.xs`
    font-size: 18px;
  `};
  }
`;

Text.defaultProps = {
  display: 'inline',
  'text-align': 'left',
  'font-size': '12px',
  color: theme.primary,
  'font-weight': 'normal',
  'line-height': '1.5',
};

export const Strong = styled.span`
  font-size: ${props => props.fs};
  color: ${props => props.color};
  font-weight: 600;
`;
Strong.defaultProps = {
  'font-size': '14px',
  'font-color': '#262626',
};
