import { media, Container } from 'shared';
import styled from 'styled-components';

export const ResponsiveVanish = styled(Container)`
  ${media.sm`
    display: none;
  `}
`;

export const ContactContainer = styled(Container)`
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  width: 100%;
`;

export const Contact = styled(Container)`
  flex-direction: column;
  justify-content: center;
  width: 50vh;
  min-width: 400px;
`;
