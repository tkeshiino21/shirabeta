export const testData2 = {
  users: {
    user1: {
      name: 'hoge',
      borrow: {
        book1: 'bookId(ref)',
        book2: 'bookId(ref)',
        book3: 'bookId(ref)',
      },
      likes: {
        book1: 'bookId(ref)',
        book2: 'bookId(ref)',
        book3: 'bookId(ref)',
      },
      comments: {
        book1: 'bookId(ref)',
        book2: 'bookId(ref)',
        book3: 'bookId(ref)',
      },
    },
    user２: {
      name: 'huga',
      borrow: {
        book1: 'bookId(ref)',
        book2: 'bookId(ref)',
        book3: 'bookId(ref)',
      },
      likes: {
        book1: 'bookId(ref)',
        book2: 'bookId(ref)',
        book3: 'bookId(ref)',
      },
      comments: {
        book1: 'bookId(ref)',
        book2: 'bookId(ref)',
        book3: 'bookId(ref)',
      },
    },
  },
  books: {
    book1: {
      title: 'HTMLの基礎',
      author: ['author1', 'author2'],
      publishedDate: 20202,
      likesCount: '',
      commentsCount: '',
    },
    book2: {
      title: 'CSSの教科書',
      author: ['author1', 'author2'],
      publishedDate: 20191,
      likesCount: '',
      commentsCount: '',
    },
  },
};

// 人と本との関係;
// 1, お気に入り関係;
// 一対多;
// 2, コメント関係;
// 一対多;
// 3, 貸し出し関係;
// 一対多;

// //パターン１　本に借りられている情報をもたせる
// export const testData1 = {
//   users: { user1: { name: 'huga', email: 'huga@gmail.com' } },
//   books: {
//     book: {
//       title: 'title',
//       author: ['author1', 'author2'],
//       publishedDate: 2020 - 2,
//       borrow: { user1: 'id', user2: 'id' },
//     },
//   },
// };

//  パターン２　人に借りている情報をもたせる
// export const testData2 = {
//   users: {
//     user1: {
//       name: 'huga',
//       email: 'huga@gmail.com',
//       password: 'hoge',
//       borrow: 'bookid',
//       comments: 'bookid',
//     },
//   },
//   books: {
//     book: {
//       title: 'title',
//       author: ['author1', 'author2'],
//       publishedDate: 2020 - 2,
//       borrow: { user1: 'id', user2: 'id' },
//     },
//   },
// };

// // パターン３　本と人の関係をroot直下にもたせる
// export const testData3 = {
//   users: { user1: { name: 'huga', email: 'huga@gmail.com' } },
//   books: {
//     book: {
//       title: 'title',
//       author: ['author1', 'author2'],
//       publishedDate: 2020 - 2,
//     },
//   },
//   borrows: {
//    relation1: {
//         borrowee: {
//           book1: id,
//         },
//         borrower: {
//           user1: id,
//         },
//      }
//   },
// };
