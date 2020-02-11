import React, { useState, FC, ChangeEvent } from 'react';
import BorrowData from 'containers/templates/MyBorrowData';
import LayoutWithSubMenu from 'components/organisms/LayoutWithSubMenu';
import { MdComment, MdEventNote } from 'react-icons/md';
import { Paper, Container, Spacing, theme } from 'components/atoms';
import BookLog from 'containers/templates/MyBookLog';

const MyPage: FC = () => {
  const listItems = [
    {
      name: 'BookLog',
      label: 'ブックログ',
      icon: MdComment,
    },
    {
      name: 'Borrowed',
      label: '貸出中の本',
      icon: MdEventNote,
    },
  ];
  const [activeMenu, setActiveMenu] = useState(listItems[1].name);
  const menuHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setActiveMenu(e.target.value);
  };

  return (
    <LayoutWithSubMenu
      listItems={listItems}
      activeMenu={activeMenu}
      menuHandler={menuHandler}
    >
      <Paper>
        <Container>
          {activeMenu === 'Borrowed' ? <BorrowData /> : <BookLog />}
          <Spacing mTop={theme.small} />
        </Container>
      </Paper>
    </LayoutWithSubMenu>
  );
};

export default MyPage;
