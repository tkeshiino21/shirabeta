import React from 'react';
import {
  Input,
  Select,
  SelectWrapper,
  Option,
  Textarea,
} from 'components/atoms';

export const CustomInput = props => <Input className="underlined" {...props} />;
export const CustomTextarea = props => (
  <Textarea className="outlined" {...props} />
);
export const CustomHidden = props => (
  <input style={{ display: 'none' }} {...props} />
);
export const CustomSelect = (props, { option }) => (
  <SelectWrapper>
    <Select {...props}>
      <option value="" hidden>
        {option.title}
      </option>
      {option.items.map(name => {
        return (
          <Option key={name} name="category" value={name}>
            {name}
          </Option>
        );
      })}
    </Select>
  </SelectWrapper>
);
