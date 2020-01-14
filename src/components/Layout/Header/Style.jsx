import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import { theme, Container } from 'Shared';

// forHeader
export const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  height: 40px;
  width: 100vw;
  background-color: ${theme.primary};
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

export const Menu = styled(MdMenu)`
  color: ${theme.secondary};
  font-weight: bold;
  font-size: ${theme.large};
  margin-right: ${theme.large};
  cursor: pointer;
`;

export const AuthButtonContainer = styled(Container)`
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
  height: '40px';
`;

// forNavLinks
export const MyNavLink = styled(NavLink)`
  color: ${theme.secondary};
  margin: 0 ${theme.large};
  &.navItem {
    line-height: 2.5;
  }
`;

export const NavMenu = styled.div`
  position: absolute;
  top: 35px;
  width: 200px;
  background: white;
  z-index: 1;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.2);
`;
