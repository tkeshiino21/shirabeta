import styled from 'styled-components';
import { theme } from './theme';
import { media } from './media';

export const Label = styled.label`
  font-weight: 400;
  font-size: 0.875rem;
  letter-spacing: 0.01071em;
`;

export const Input = styled.input`
  width: 100%;
  &.outlined {
    outline: 1px solid ${theme.naturalDark};
    background: ${theme.natural};
    text-indent: 2px;
  }
  &.underlined {
    border-bottom: 1px solid ${theme.naturalDark};
  }
`;

export const Textarea = styled.textarea`
  height: 200px;
  width: 100%;

  &.outlined {
    outline: none;
    background-color: ${theme.light};
    border: 1px solid ${theme.naturalDark};
    border-radius: 4px;
  }

  &.underlined {
    border-bottom: 1px solid ${theme.naturalDark};
  }
`;

// select
export const SelectWrapper = styled.div`
  position: relative;
  &::before {
    position: absolute;
    top: 0.8em;
    right: 0.8em;
    width: 0;
    height: 0;
    padding: 0;
    content: '';
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid ${theme.naturalDark};
    z-index: 1;
    pointer-events: none;
  }
`;

type SelectProps = {
  width?: any;
};
export const Select = styled.select<SelectProps>`
  outline: none;
  text-indent: 0.01px;
  text-overflow: '';
  background: none transparent;
  vertical-align: middle;
  height: 32px;
  padding: 4px 8px;
  border: 1px solid ${theme.naturalDark};
  color: ${theme.dark};
  width: ${props => props.width || '100%'};
  border-radius: 4px;
  appearance: none;
  cursor: pointer;

  &.small {
    width: 120px;
    ${media.sm`
      width: 80px;
    `}
  }
`;

type OptionProps = {
  name?: any;
};
export const Option = styled.option<OptionProps>`
  background-color: ${theme.light};
  color: ${theme.naturalDark};
`;
