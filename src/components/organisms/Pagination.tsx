import React, { FC, useRef, useState, useEffect } from 'react';
import {
  MdFirstPage,
  MdChevronLeft,
  MdChevronRight,
  MdLastPage,
} from 'react-icons/md';
import { theme, Box, Text } from 'components/atoms';

interface Props {
  sum: number;
  per: number;
}

const Pagination: FC<Props> = ({ sum, per }) => {
  const isFirstRender = useRef(true);
  const totalPage: number = Math.ceil(sum / per);
  const [page, setPage] = useState(1);
  const backActive = page <= 1 ? false : true;
  const nextActive = totalPage === page ? false : true;
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
  }, [page]);

  const handleFirst = (): void => {
    setPage(1);
    console.log(page);
  };

  const handleBack = (): void => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
    console.log(page);
  };

  const handleForward = (): void => {
    if (page === totalPage) {
      return;
    }
    setPage(page + 1);
    console.log(page);
  };

  const handleLast = (): void => {
    setPage(10);
    console.log(page);
  };

  return (
    <div>
      {totalPage !== 0 && (
        <Box style={{ verticalAlign: 'middle' }}>
          <MdFirstPage
            style={{
              color: backActive === true ? theme.dark : theme.naturalDark,
              cursor: backActive === true ? 'pointer' : 'default',
              margin: theme.small,
              fontSize: theme.large,
            }}
            onClick={() => handleFirst()}
          />
          <MdChevronLeft
            style={{
              color: backActive === true ? theme.dark : theme.naturalDark,
              cursor: backActive === true ? 'pointer' : 'default',
              margin: theme.small,
              fontSize: theme.large,
            }}
            onClick={() => handleBack()}
          />
          <Text
            className="subtitle2"
            style={{
              margin: theme.small,
              marginTop: '20px',
            }}
          >
            ページネーション実装中
          </Text>
          <MdChevronRight
            style={{
              color: nextActive === true ? theme.dark : theme.naturalDark,
              cursor: nextActive === true ? 'pointer' : 'default',
              margin: theme.small,
              fontSize: theme.large,
            }}
            onClick={() => handleForward()}
          />
          <MdLastPage
            style={{
              color: nextActive === true ? theme.dark : theme.naturalDark,
              cursor: nextActive === true ? 'pointer' : 'default',
              margin: theme.small,
              fontSize: theme.large,
            }}
            onClick={() => handleLast()}
          />
        </Box>
      )}
    </div>
  );
};

export default Pagination;
