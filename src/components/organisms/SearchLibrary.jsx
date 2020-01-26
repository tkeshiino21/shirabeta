import React from 'react';
import ArticleSearch from 'components/molecules/ArticleSearch';

const SearchLibrary = ({ handles }) => {
  const handleCategory = handles.handleCategory;
  const handleFilter = handles.handleFilter;
  const handleOrder = handles.handleOrder;
  console.log(handleOrder);
  const searchItems = {
    selects: [
      {
        title: 'カテゴリ',
        onChange: handleCategory,
        items: [
          'すべて',
          'インフラ',
          'バックエンド',
          'フロントエンド',
          'デザイン',
          'その他',
        ],
      },
      {
        title: '絞り込み',
        onChange: handleFilter,
        items: ['すべて', '貸出可能のみ'],
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

export default SearchLibrary;
