const fetchedPost = [
  { title: 'hoge', createdAt: 2019 },
  { title: 'huga', createdAt: 2020 },
  { title: 'hogefuga', createdAt: 1993 },
];

const mapped = () => {
  return fetchedPost.map(a => {
    return { value: a.createdAt, title: a.title };
  });
};

const lastAnswer = () => {
  return mapped().sort((a, b) => {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    return 0;
  });
};

console.log(mapped());
console.log(lastAnswer());
