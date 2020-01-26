import React, { useState } from 'react';
import BorrowData from 'containers/organisms/FetchedBorrowData';
import LayoutWithSubMenu from 'components/organisms/Layout/LayoutWithSubMenu';
import { MdComment, MdEventNote } from 'react-icons/md';
import { Paper, Container, Spacing, theme } from 'components/atoms';
import BookLog from 'containers/organisms/BookLog';

const MyPage = ({ onReturn }) => {
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
  const menuHandler = e => {
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
          {activeMenu === 'Borrowed' ? (
            <BorrowData handleClick={onReturn} />
          ) : (
            <BookLog />
          )}
          <Spacing mTop={theme.small} />
        </Container>
      </Paper>
    </LayoutWithSubMenu>
  );
};

export default MyPage;
