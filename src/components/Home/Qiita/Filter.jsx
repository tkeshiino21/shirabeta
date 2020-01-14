import React from 'react';
import { Spacing } from 'Shared';
import { TagSelect } from 'components/Home/Qiita/Style';

const Filter = ({ tag, handleClick }) => {
  return (
    <div>
      <TagSelect
        name="exam"
        value="本"
        className={tag.tagName === '本' ? 'activeTag' : 'passiveTag'}
        onClick={handleClick}
      >
        本
      </TagSelect>
      <Spacing mRight="20px" style={{ display: 'inline' }} />
      <TagSelect
        name="exam"
        value="書籍"
        className={tag.tagName === '書籍' ? 'activeTag' : 'passiveTag'}
        onClick={handleClick}
      >
        書籍
      </TagSelect>
      <Spacing mRight="20px" style={{ display: 'inline' }} />
      <TagSelect
        name="exam"
        value="技術書"
        className={tag.tagName === '技術書' ? 'activeTag' : 'passiveTag'}
        onClick={handleClick}
      >
        技術書
      </TagSelect>
    </div>
  );
};

export default Filter;
