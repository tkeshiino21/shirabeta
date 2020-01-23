import styled from 'styled-components';
import { theme } from './theme';
import { media } from './media';

export const Label = styled.label`
  font-weight: 400;
  font-size: 0.875rem;
  letter-spacing: 0.01071em;
`;

export const Input = styled.input`
  margin-left: ${theme.small};
  width: 100%;
  &.outlined {
    outline: 1px solid ${theme.naturalDark};
    background: ${theme.natural};
  }
  &.underlined {
    border-bottom: 1px solid ${theme.naturalDark};
  }
`;

export const Textarea = styled.textarea`
  margin-left: ${theme.small};
  height: 200px;
  width: 100%;

  &.outlined {
    outline: 1px solid ${theme.naturalDark};
    background: ${theme.natural};
  }

  &.underlined {
    border-bottom: 1px solid ${theme.naturalDark};
  }
`;

// select
export const SelectWrapper = styled.div`
  position: relative;
  &::after {
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
    cursor: pointer;
  }
`;
export const Select = styled.select`
  outline: none;
  text-indent: 0.01px;
  text-overflow: '';
  background: none transparent;
  vertical-align: middle;
  height: 32px;
  padding: 4px 8px;
  border: 1px solid ${theme.naturalDark};
  color: ${theme.naturalDark};
  width: ${props => props.width || '100%'};
  border-radius: 4px;
  appearance: none;

  &.small {
    width: 120px;
    ${media.sm`
      width: 80px;
    `}
  }
`;
export const Option = styled.option`
  background-color: ${theme.light};
  color: ${theme.naturalDark};
`;
