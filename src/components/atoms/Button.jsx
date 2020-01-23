import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from 'components/atoms/theme';

export const Button = styled.button`
  box-sizing: border-box;
  padding: 6px 16px;
  border-radius: ${theme.radius};
  cursor: pointer;

  font-size: 0.75rem;
  line-height: 1.66;
  letter-spacing: 0.03333em;

  /* できるだけボタンそのものにmarginをもたせない */
  margin-top: ${props => props.mTop || '0px'};
  margin-right: ${props => props.mRight || '0px'};
  margin-bottom: ${props => props.mBottom || '0px'};
  margin-left: ${props => props.mLeft || '0px'};

  /* /ボタンデザイン */
  &.primary {
    background-color: ${theme.primary};
    border: 1px solid ${theme.light};
    color: ${theme.light};
  }
  &.secondary {
    padding: 5px 15px;
    background-color: inherit;
    border: 1px solid ${theme.primary};
    color: ${theme.primary};
  }
  &.text {
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0;
    appearance: none;
    color: ${props => props.color || theme.naturalDark};
  }

  /* サイズ */
  &.stretch {
    width: 100%;
  }
  &.small {
    padding: 4px 5px;
    font-size: 1rem;
  }
  &.large {
    padding: 8px 11px;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
  }
`;
