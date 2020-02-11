import styled from 'styled-components';
import { theme } from 'components/atoms/theme';

type Props = {
  color?: string;
  mTop?: any;
  mBottom?: any;
  mRight?: any;
  mLeft?: any;
  onClick?: () => void;
  className?: string;
};

export const Button = styled.button<Props>`
  box-sizing: border-box;
  padding: 6px 16px;
  border-radius: ${theme.radius};
  cursor: pointer;

  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;

  /* できるだけボタンそのものにmarginをもたせない */
  margin-top: ${props => props.mTop || '0px'};
  margin-right: ${props => props.mRight || '0px'};
  margin-bottom: ${props => props.mBottom || '0px'};
  margin-left: ${props => props.mLeft || '0px'};

  /* /ボタンデザイン */
  &.gradation {
    background-image: linear-gradient(45deg, #ffc107 0%, #ff8b5f 100%);
    color: ${props => props.color || theme.light};
  }
  &.primary {
    background-color: ${theme.primary};
    border: none;
    color: ${theme.light};
  }
  &.secondary {
    padding: 5px 15px;
    background-color: inherit;
    border: 1px solid ${theme.primary};
    color: ${theme.primary};
  }
  &.outlined {
    padding: 5px 15px;
    background-color: inherit;
    border: 1px solid ${theme.light};
    color: ${theme.light};
  }
  &.grey {
    background-color: ${theme.naturalDark};
    border: none;
    color: ${theme.light};
  }
  &.disabled {
    padding: 5px 15px;
    background-color: inherit;
    border: 1px solid ${theme.naturalDark};
    color: ${theme.naturalDark};
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
  &.middle {
    width: 80%;
  }
`;

export const ButtonWrapper = styled.div`
  text-align: center;
`;
