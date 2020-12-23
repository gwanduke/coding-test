function solution(clothes) {
  const mapper = clothes.reduce((acc, [name, type]) => {
    acc[type] = acc[type] || [];
    acc[type].push(name);

    return acc;
  }, {});

  const arr = [];
  const keys = Object.keys(mapper);
  keys.forEach((key) => {
    arr.push(mapper[key].length);
  });

  return arr.reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}
