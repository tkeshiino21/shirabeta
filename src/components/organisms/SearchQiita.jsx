import React from 'react';
import ArticleSearch from 'components/molecules/ArticleSearch';

const SearchQiita = ({ handles }) => {
  const searchItems = {
    selects: [
      {
        select: 'tag',
        onClick: handles.handleTag,
        items: ['技術書', '書籍', '本'],
      },
      {
        select: 'title',
        onClick: handles.handleTitle,
        items: ['技術書', '書籍', '本'],
      },
    ],
    order: {
      order: '並び替え',
      onClick: handles.handleOrder,
      items: ['新着順', '人気順'],
    },
  };
  return <ArticleSearch searchItems={searchItems} />;
};

export default SearchQiita;
