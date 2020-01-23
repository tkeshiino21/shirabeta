import styled from 'styled-components';
import { theme } from './theme';
import { Container } from './Layout';

export const Paper = styled.div`
  background-color: ${theme.light};
  width: 100%;
  &.shadow {
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
`;

// almost same as Card
// In many case, Paper is larger than Card and just includes list or article
// in contrast to card also includes media.
export const Card = styled.div`
  background-color: ${theme.light};
  overflow: hidden;
  z-index: 100;

  &.shadow {
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
`;

export const BackDrop = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
`;
