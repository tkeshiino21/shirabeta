import styled from 'styled-components';
import { theme } from './theme';

export const BackDrop = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  z-index: 200;
  width: 100vw;
  height: 100vh;
`;

export const TagWrapper = styled.ul`
  list-style: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
`;

export const Tag = styled.li`
  line-height: 1.6;
  font-size: 14px;
  position: relative;
  display: inline-block;
  height: 20px;
  margin: 0 10px 10px 0;
  padding: 0 20px 0 23px;
  text-decoration: none;
  color: ${theme.naturalDark};
  border-radius: 4px 0 0 3px;
  background: inherit;
  border: 1px solid ${theme.naturalDark};
  &::after {
    position: absolute;
    top: -2px;
    right: -8px;
    width: 0;
    height: 0;
    content: '';
    border-width: 12px 0 12px 8px;
    border-style: solid;
    border-color: transparent transparent transparent ${theme.naturalDark};
    border-radius: 4px;
  }
`;
