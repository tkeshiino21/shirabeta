import styled from 'styled-components';
import { theme } from './theme';
import { Container } from './Container';

export const Card = styled.div`
  display: flex;
  background-color: ${theme.light};
  padding: ${theme.xlarge};
  width: ${props => props.width || '100%'};

  &.shadow {
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.2);
  }
`;

export const CardContainer = styled(Container)`
  background-color: ${theme.light};
  padding: ${props => props.padding || '0px'};
  width: ${props => props.width || '100%'};

  &.shadow {
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.2);
  }
`;
