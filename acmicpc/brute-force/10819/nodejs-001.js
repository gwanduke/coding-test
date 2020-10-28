/**
 * https://www.acmicpc.net/problem/10819
 *
 * 차이를 최대로
 */

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

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solve(input);
  process.exit();
});

function calc(arr) {
  let rst = 0;
  for (let i = 0; i <= arr.length - 2; i++) {
    rst += Math.abs(arr[i] - arr[i + 1]);
  }

  return rst;
}

function solve(input) {
  const len = Number(input[0]);

  numbers = input[1]
    .split(" ")
    .map(Number)
    .sort((x, y) => x - y);

  let result = numbers;
  let max = 0;
  do {
    const rst = calc(result);
    if (max < rst) {
      max = rst;
    }
  } while ((result = next_permutation(numbers)));
  console.log(max);
}
