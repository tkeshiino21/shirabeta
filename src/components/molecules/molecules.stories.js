import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MdComment, MdEventNote } from 'react-icons/md';
import MenuWithHamburger from 'components/molecules/MenuWithHamburger';
import Menu from 'components/molecules/Menu';
import HeroHeader from 'components/molecules/HeroHeader';
import FormData from 'components/molecules/FormFormat';
import SubMenu from 'components/molecules/SubMenu';
import CounterLikes from 'components/molecules/CounterLikes';
import CounterReactions from 'components/molecules/CounterReactions';
import {
  CustomInput,
  CustomHidden,
  CustomSelect,
  CustomTextarea,
} from 'components/molecules/FormCustom';
import Article from 'components/molecules/Article';

export default { title: 'MOLECULES' };

export const MenuWithHamburgerSt = () => (
  <>
    <MenuWithHamburger />
  </>
);
export const MenusSt = () => (
  <Router>
    <Menu />
  </Router>
);
export const HeroHeadersSt = () => <HeroHeader />;
export const FormDatasSt = () => (
  <>
    <FormData
      datas={[
        {
          name: 'name',
          type: 'text',
          input: CustomInput,
        },
        {
          name: 'email',
          type: 'email',
          input: CustomHidden,
        },
        {
          name: 'additional',
          type: 'text',
          input: CustomTextarea,
        },
      ]}
    />
  </>
);
export const SubMenusSt = () => (
  <SubMenu
    listItems={[
      {
        name: 'BookLog',
        icon: MdComment,
      },
      {
        name: 'Borrowed',
        icon: MdEventNote,
      },
    ]}
  />
);
export const CounterLikesSt = () => <CounterLikes likesCount={'1'} />;
export const CounterReactionsSt = () => (
  <CounterReactions counts={{ likesCount: '1', commentsCount: '5' }} />
);
export const ArticleSt = () => (
  <Router>
    <Article
      post={{
        title: 'こんにちは',
        link: 'https//google.com',
        outer: true,
        date: '2020-1-20',
      }}
      counts={{ likesCount: '1', commentsCount: '5' }}
    />
    <Article
      post={{
        title: 'こんばんは',
        link: 'https//google.com',
        outer: false,
        author: ['hello', 'how are you?'],
        date: '2020-1-20',
      }}
      counts={{ likesCount: '1', commentsCount: '5' }}
    />
  </Router>
);
