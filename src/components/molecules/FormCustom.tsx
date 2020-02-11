import React, { FC } from 'react';
import {
  Input,
  Select,
  SelectWrapper,
  Option,
  Textarea,
} from 'components/atoms';

export const CustomInput: FC = () => <Input className="underlined" />;
export const CustomTextarea: FC = props => (
  <Textarea className="outlined" {...props} />
);
export const CustomHidden: FC = props => (
  <input style={{ display: 'none' }} {...props} />
);

type Props = {
  option: { items: { name: any } };
};

export const SelectCategory: FC = props => {
  const option = [
    'インフラ',
    'セキュリティ',
    'バックエンド',
    'フロントエンド',
    'デザイン',
    'その他',
  ];

  return (
    <SelectWrapper style={{ width: '100%' }}>
      <Select {...props}>
        <option value="" hidden>
          カテゴリ
        </option>
        {option.map(name => {
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
