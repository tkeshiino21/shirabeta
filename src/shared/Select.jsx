import styled from 'styled-components';
import { theme } from './theme';

export const SelectWrapper = styled.div`
  position: relative;
  &::before {
    position: absolute;
    top: 1.1em;
    right: 1.1em;
    width: 0;
    height: 0;
    padding: 0;
    content: '';
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #666666;
    pointer-events: none;
  }
`;

export const Select = styled.select`
  outline: none;
  text-indent: 0.01px;
  text-overflow: '';
  background: none transparent;
  vertical-align: middle;
  height: 40px;
  padding: 8px 12px;
  border: 1px solid #ddd;
  color: ${theme.naturalDark};
  width: ${props => props.width || '100%'};
  margin-right: ${props => props.mRight || '5px'};
  border-radius: 3px;
  appearance: none;
`;
export const Option = styled.option`
  background-color: ${theme.light};
  color: ${theme.naturalDark};
`;
