import React, { FC, ChangeEvent } from 'react';
import ArticleSearch from 'components/molecules/ArticleSearch';

type Props = {
  handles: {
    handleTag: (e: ChangeEvent<HTMLInputElement>) => void;
    handleTitle: (e: ChangeEvent<HTMLInputElement>) => void;
    handleOrder: (e: ChangeEvent<HTMLInputElement>) => void;
  };
};

const SearchQiita: FC<Props> = ({ handles }) => {
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
        title: 'タグ1',
        onChange: handles.handleTag,
        items: ['技術書', '書籍', '本'],
      },
      {
        title: 'タグ2',
        onChange: handles.handleTitle,
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
      onChange: handles.handleOrder,
      items: ['新着順', '人気順'],
    },
  };

  return <ArticleSearch searchItems={searchItems} />;
};

export default SearchQiita;
