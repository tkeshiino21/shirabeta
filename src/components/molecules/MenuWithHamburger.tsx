import React, { FC, useState } from 'react';
import { MdMenu } from 'react-icons/md';
import styled from 'styled-components';
import { theme, BackDrop } from 'components/atoms';
import Menu from 'components/molecules/Menu';

const Hamburger = styled(MdMenu)`
  color: ${theme.secondary};
  font-weight: bold;
  font-size: ${theme.xlarge};
  cursor: pointer;
`;

const MenuWithHamburger: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <>
      <Hamburger onClick={onClick} />
      {isOpen ? <Menu /> : null}
      {isOpen === true ? <BackDrop onClick={onClick} /> : null}
    </>
  );
};

export default MenuWithHamburger;
