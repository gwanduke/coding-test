function next_permutation(arr) {
  const n = arr.length;
  let i = arr.length - 1;

  while (i > 0 && arr[i - 1] >= arr[i]) i -= 1;
  if (i <= 0) return false;

  let j = n - 1;
  while (arr[j] <= arr[i - 1]) j -= 1;

  [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
  j = n - 1;

  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i += 1;
    j -= 1;
  }

  return arr;
}

module.exports = next_permutation;
