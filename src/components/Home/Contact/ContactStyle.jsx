import { media, Container } from 'Shared';
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
  margin-top: 20px;
  height: 100%;
  width: 100%;
`;
