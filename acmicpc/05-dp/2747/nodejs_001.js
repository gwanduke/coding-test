// https://www.acmicpc.net/problem/2747 피보나치 수
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

const memo = [];
const fib = (n) => {
  if (memo[n]) return memo[n];

  if (n === 1) return 1;
  if (n === 0) return 0;

  memo[n] = fib(n - 2) + fib(n - 1);

  return memo[n];
};

function solve(line) {
  console.log(fib(Number(line)));
}
