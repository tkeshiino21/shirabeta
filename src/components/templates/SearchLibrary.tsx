import React, { FC, ChangeEvent } from 'react';
import ArticleSearch from 'components/molecules/ArticleSearch';

type Props = {
  handles: {
    handleCategory: (e: ChangeEvent<HTMLInputElement>) => void;
    handleFilter: (e: ChangeEvent<HTMLInputElement>) => void;
    handleOrder: (e: ChangeEvent<HTMLInputElement>) => void;
  };
};

const SearchLibrary: FC<Props> = ({ handles }) => {
  const searchItems: {
    selects: {
      title: string;
      onChange: (e: ChangeEvent<HTMLInputElement>) => void;
      items: any;
    }[];
    order: {
      title: string;
      onChange: (e: ChangeEvent<HTMLInputElement>) => void;
      items: string[];
    };
  } = {
    selects: [
      {
        title: 'カテゴリ',
        onChange: handles.handleCategory,
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
        onChange: handles.handleFilter,
        items: ['すべて', '貸出可能のみ'],
      },
    ],
    order: {
      title: '並び替え',
      onChange: handles.handleOrder,
      items: ['新着順', '人気順'],
    },
  };

  return <ArticleSearch searchItems={searchItems} />;
};

export default SearchLibrary;
