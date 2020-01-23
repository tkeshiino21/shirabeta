import React from 'react';
import ArticleSearch from 'components/molecules/ArticleSearch';

const SearchLibrary = ({ handles }) => {
  // const handleCategory = handles.handleCategory;
  const handleCategory = e => {
    console.log(e.target.value);
  };
  const handleFilter = handles.handleFilter;
  const handleOrder = handles.handleOrder;
  const searchItems = {
    selects: [
      {
        title: 'カテゴリ',
        onClick: handleCategory,
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
        onClick: handleFilter,
        items: [
          'すべて',
          'お気に入りのみ',
          '貸出可能のみ',
          'お気に入りかつ貸出可能',
        ],
      },
    ],
    order: {
      title: '並び替え',
      onClick: handleOrder,
      items: ['新着順', '人気順'],
    },
  };
  return <ArticleSearch searchItems={searchItems} />;
};

export default SearchLibrary;
