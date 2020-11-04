/**
 * https://www.acmicpc.net/problem/1463
 *
 * 1로 만들기
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

function solve(line) {
  const n = Number(line);

  console.log(dynamic(n, 0));
}

const memo = { 0: 0, 1: 0, 2: 1, 3: 1 };

function dynamic(n) {
  if (memo[n]) {
    return memo[n];
  }

  memo[n] = dynamic(n - 1) + 1;

  if (n % 2 === 0) {
    const temp = dynamic(n / 2) + 1;
    if (memo[n] > temp) memo[n] = temp;
  }
  if (n % 3 === 0) {
    const temp = dynamic(n / 3) + 1;
    if (memo[n] > temp) memo[n] = temp;
  }

  return memo[n];
}

// NOTE:
// RangeError: Maximum call stack size exceeded
//
// 노드는 콜스택 제한이 있어서 이 문제를 풀기 어려울 것같다.
