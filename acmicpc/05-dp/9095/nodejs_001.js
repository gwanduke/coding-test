/**
 * https://www.acmicpc.net/problem/9095
 *
 * 1,2,3 더하기
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

  return go(n - 1) + go(n - 2) + go(n - 3);
}
