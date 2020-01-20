import styled from 'styled-components';
import { ImgContainer } from 'shared';
import loader from 'images/loader.gif';

export const Loading = styled(ImgContainer)`
  display: absolute;
  background-position: center;
  background-image: url(${loader});
  background-repeat: no-repeat;
  width: 200px;
  height: auto;
`;
