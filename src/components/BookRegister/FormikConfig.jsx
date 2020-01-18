import React from 'react';
import { SelectWrapper, Select, Option } from 'Shared';

export const CustomInput = props => (
  <input style={{ width: '100%' }} {...props} />
);
export const TransparentInput = props => (
  <input style={{ opacity: 0 }} {...props} />
);
export const HiddenInput = props => (
  <input style={{ display: 'none' }} {...props} />
);
export const CustomSelect = props => {
  const categoryItems = [
    'すべて',
    'インフラ',
    'バックエンド',
    'フロントエンド',
    'デザイン',
    'その他',
  ];
  return (
    <SelectWrapper>
      <Select {...props}>
        <option value="" hidden>
          カテゴリを選択してください
        </option>
        {categoryItems.map(name => {
          return (
            <Option key={name} name="category" value={name}>
              {name}
            </Option>
          );
        })}
      </Select>
    </SelectWrapper>
  );
};
