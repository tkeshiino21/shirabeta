import React from 'react';
import ArticleSearch from 'components/molecules/ArticleSearch';

const SearchQiita = ({ handles }) => {
  const handleTag = handles.handleTag;
  const handleTitle = handles.handleTitle;
  const handleOrder = handles.handleOrder;
  const searchItems = {
    selects: [
      {
        title: 'タグ',
        onChange: handleTag,
        items: ['技術書', '書籍', '本'],
      },
      {
        title: '技術書典',
        onChange: handleTitle,
        items: [
          '技術書',
          '技術書典2',
          '技術書典3',
          '技術書典4',
          '技術書典5',
          '技術書典6',
          '技術書典7',
          '技術書典8',
        ],
      },
    ],
    order: {
      title: '並び替え',
      onChange: handleOrder,
      items: ['新着順', '人気順'],
    },
  };
  return <ArticleSearch searchItems={searchItems} />;
};

export default SearchQiita;
