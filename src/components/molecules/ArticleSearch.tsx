import React, { FC } from 'react';
import {
  Box,
  Block,
  Select,
  SelectWrapper,
  Spacing,
  Option,
  theme,
} from 'components/atoms';

type Props = {
  searchItems: {
    selects: [
      {
        title: string;
        items: [];
        onChange: () => void;
      },
    ];
    order: {
      title: string;
      items: [];
      onChange: () => void;
    };
  };
};

const ArticleSearch: FC<Props> = ({ searchItems }) => {
  return (
    <Block>
      <Box>
        <Box className="grow">
          {searchItems.selects.map(select => {
            return (
              <Spacing key={select.title} mRight={theme.xsmall}>
                <SelectWrapper>
                  <Select
                    key={select.title}
                    id={select.title}
                    className="small"
                    onChange={select.onChange}
                  >
                    <option value="" hidden>
                      {select.title}
                    </option>
                    {select.items.map(item => {
                      return (
                        <Option key={item} name="sort" value={item}>
                          {item}
                        </Option>
                      );
                    })}
                  </Select>
                </SelectWrapper>
              </Spacing>
            );
          })}
        </Box>
        <SelectWrapper>
          <Select
            id="sort"
            name="sort"
            className="small"
            onChange={searchItems.order.onChange}
          >
            <option value="" hidden>
              {searchItems.order.title}
            </option>
            {searchItems.order.items.map(item => {
              return (
                <Option key={item} name="sort" value={item}>
                  {item}
                </Option>
              );
            })}
          </Select>
        </SelectWrapper>
      </Box>
    </Block>
  );
};

export default ArticleSearch;
