import React from 'react';
import { Spacing } from 'shared';
import { TagSelect } from 'components/Home/style';

const Filter = ({ tag, handleClick }) => {
  const tagItems = ['本', '書籍', '技術書'];
  return tagItems.map(tagName => {
    return (
      <div key={tagName}>
        <TagSelect
          name="qiita"
          value={tagName}
          className={tag.tagName === tagName ? 'activeTag' : 'passiveTag'}
          onClick={handleClick}
          style={{ width: '80px' }}
        >
          {tagName}
        </TagSelect>
        <Spacing mRight="10px" style={{ display: 'inline' }} />
      </div>
    );
  });
};

export default Filter;
