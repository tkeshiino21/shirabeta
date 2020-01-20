import React from 'react';
import { Container, Option, Select, SelectWrapper } from 'shared';

const Filter = ({ tag, handleClick }) => {
  const categoryItems = [
    'すべて',
    'インフラ',
    'バックエンド',
    'フロントエンド',
    'デザイン',
    'その他',
  ];
  const filterItems = [
    'すべて',
    'お気に入りのみ',
    '貸出可能のみ',
    'お気に入りかつ貸出可能',
  ];
  const sortItems = [
    'すべて',
    'インフラ',
    'バックエンド',
    'フロントエンド',
    'デザイン',
    'その他',
  ];
  return (
    <Container>
      <SelectWrapper>
        <Select id="category" width="120px">
          <option value="" hidden>
            カテゴリ
          </option>
          {categoryItems.map(name => {
            return (
              <Option
                key={name}
                name="category"
                value={name}
                className={
                  tag.tagName === { name }
                    ? 'activeTag fixedWidth'
                    : 'passiveTag fixedWidth'
                }
                onClick={handleClick}
              >
                {name}
              </Option>
            );
          })}
        </Select>
      </SelectWrapper>
      {/* TODO: ここに検索バーを実装したい */}
      <Container justify="flex-end">
        <SelectWrapper>
          <Select id="filter" name="filter" width="100px">
            <option value="" hidden>
              絞り込み
            </option>
            {filterItems.map(name => {
              return (
                <Option
                  key={name}
                  name="filter"
                  value={name}
                  className={
                    tag.tagName === { name }
                      ? 'activeTag fixedWidth'
                      : 'passiveTag fixedWidth'
                  }
                  onClick={handleClick}
                >
                  {name}
                </Option>
              );
            })}
          </Select>
        </SelectWrapper>
        <SelectWrapper>
          <Select id="sort" name="sort" width="100px">
            <option value="" hidden>
              並び替え
            </option>
            {sortItems.map(name => {
              return (
                <Option
                  key={name}
                  name="sort"
                  value={name}
                  className={
                    tag.tagName === { name }
                      ? 'activeTag fixedWidth'
                      : 'passiveTag fixedWidth'
                  }
                  onClick={handleClick}
                >
                  {name}
                </Option>
              );
            })}
          </Select>
        </SelectWrapper>
      </Container>
    </Container>
  );
};

export default Filter;
