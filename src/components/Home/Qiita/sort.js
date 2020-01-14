const list = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 },
];

const sortABC = list => {
  return list.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
};

// temporary array holds objects with position and sort-value
const mapped = list => {
  return list.map(function(el, i) {
    return { index: i, value: el };
  });
};

const afterMapped = mapped(list);
const lastAnswer = () => {
  return afterMapped.sort(function(a, b) {
    if (a.value.value > b.value.value) {
      return 1;
    }
    if (a.value.value < b.value.value) {
      return -1;
    }
    return 0;
  });
};

console.log('hello');
console.log(sortABC(list));
console.log(mapped(list));
console.log(lastAnswer());
