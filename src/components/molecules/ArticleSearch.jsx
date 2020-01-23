import React from 'react';
import {
  Box,
  Block,
  Select,
  SelectWrapper,
  Spacing,
  Option,
  theme,
} from 'components/atoms';

const ArticleSearch = ({ searchItems }) => {
  return (
    <Block>
      <Box>
        <Box className="grow">
          {searchItems.selects.map(select => {
            return (
              <>
                <SelectWrapper>
                  <Select
                    key={select.title}
                    id={select.title}
                    className="small"
                    onClick={select.onClick}
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
                <Spacing mRight={theme.xsmall} />
              </>
            );
          })}
        </Box>
        <SelectWrapper>
          <Select
            id="sort"
            name="sort"
            className="small"
            onClick={searchItems.order.onClick}
          >
            <option value="" hidden>
              {searchItems.order.title}
            </option>
            {searchItems.order.items.map(item => {
              return (
                <Option key={item} name="sort" value={item}>
                  {/* onClick={handleOrder}> */}
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
