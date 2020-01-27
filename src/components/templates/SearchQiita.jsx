import React from 'react';
import ArticleSearch from 'components/molecules/ArticleSearch';

const SearchQiita = ({ handles }) => {
  const { handleTag } = handles;
  const { handleTitle } = handles;
  const { handleOrder } = handles;
  const searchItems = {
    selects: [
      {
        title: 'タグ1',
        onChange: handleTag,
        items: ['技術書', '書籍', '本'],
      },
      {
        title: 'タグ2',
        onChange: handleTitle,
        items: [
          '技術書典1',
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
