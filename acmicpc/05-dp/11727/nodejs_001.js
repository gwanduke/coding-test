/**
 * https://www.acmicpc.net/problem/11727
 *
 * 2xn 타일링
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  solve(line);
  rl.close();
}).on("close", function () {
  process.exit();
});

const memo = [0, 1, 3];

function solve(line) {
  const n = Number(line);

  console.log(go(n));
}

function go(n) {
  if (memo[n]) return memo[n];

  memo[n] = (go(n - 1) + 2 * go(n - 2)) % 10007;

  return memo[n];
}
