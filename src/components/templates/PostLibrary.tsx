import React, {
  FC,
  ChangeEvent,
  useEffect,
  useState,
  ReactElement,
} from 'react';
import Article from 'components/molecules/Article';
import SearchLibrary from 'components/templates/SearchLibrary';
import {
  Loader,
  Block,
  Paper,
  Container,
  Spacing,
  theme,
} from 'components/atoms';

type Props = {
  onRequest: (ISBN: string, uid: string) => void;
  isLoading: boolean;
  library: {
    map: () => ReactElement;
    concat: () => {
      sort: (arg0: object) => { map: (fetchedPost: object) => ReactElement };
    };
  };
  collations: { collationLikes: []; collationComments: [] };
};

const PostLibrary: FC<Props> = ({
  onRequest,
  isLoading,
  library,
  collations,
}) => {
  const [category, setCategory] = useState('すべて');
  const [filter, setFilter] = useState('すべて');
  const [order, setOrder] = useState('新着順');
  const handleCategory = (e: ChangeEvent<HTMLInputElement>) =>
    setCategory(e.target.value);
  const handleFilter = (e: ChangeEvent<HTMLInputElement>) =>
    setFilter(e.target.value);
  const handleOrder = (e: ChangeEvent<HTMLInputElement>) =>
    setOrder(e.target.value);
  useEffect(() => {
    onRequest(category, filter);
  }, [category, filter, onRequest]);
  const Posts = () => {
    const copiedLibrary = library.concat();
    const sortedLibrary = copiedLibrary.sort(
      (a: { likesCount: number }, b: { likesCount: number }) => {
        return b.likesCount - a.likesCount;
      },
    );
    const libraryItems = order === '人気順' ? sortedLibrary : library;

    return libraryItems.map(
      (fetchedPost: {
        title: string;
        author: string[];
        date: string;
        link: string;
        outer: boolean;
        publishedDate: string;
        ISBN: never;
        likesCount: number;
        commentsCount: number;
      }) => {
        const post = {
          title: fetchedPost.title,
          author: fetchedPost.author,
          date: fetchedPost.publishedDate,
          link: `/library/${fetchedPost.ISBN}`,
          outer: false,
        };
        const counts = {
          likesCount: fetchedPost.likesCount,
          commentsCount: fetchedPost.commentsCount,
        };
        const collation = {
          myLikes:
            collations === undefined || collations.collationLikes === undefined
              ? []
              : collations.collationLikes.includes(fetchedPost.ISBN),
          myComments:
            collations === undefined ||
            collations.collationComments === undefined
              ? []
              : collations.collationComments.includes(fetchedPost.ISBN),
        };
        return (
          <Article
            key={fetchedPost.ISBN}
            post={post}
            collation={collation}
            counts={counts}
          />
        );
      },
    );
  };
  if (isLoading !== false) {
    return <Loader />;
  }

  return (
    <Paper>
      <Container>
        <Spacing mTop={theme.small} />
        <Block>
          <SearchLibrary
            handles={{
              handleCategory,
              handleFilter,
              handleOrder,
            }}
          />
        </Block>
        <Spacing mTop={theme.medium} />
        <Posts />
      </Container>
    </Paper>
  );
};

export default PostLibrary;
