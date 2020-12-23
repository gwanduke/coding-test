/**
 * https://www.acmicpc.net/problem/15988
 *
 * 1, 2, 3 더하기 3
 */
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

function solve(input) {
  const [count, ...numbers] = input;

  numbers.forEach((number) => {
    console.log(go(number));
  });
}

const memo = [0, 1, 2, 4];
function go(n) {
  if (memo[n]) return memo[n];

  memo[n] = (go(n - 1) + go(n - 2) + go(n - 3)) % 1000000009;

  return memo[n];
}

// RangeError: Maximum call stack size exceeded
