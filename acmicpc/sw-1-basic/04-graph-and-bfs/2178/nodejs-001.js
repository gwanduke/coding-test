/**
 * https://www.acmicpc.net/problem/2178
 *
 * 미로 탐색
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
  const [n, m] = input[0].split(" ").map(Number);

  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(input[i + 1].spilt(""));
  }

  bfs(arr, 1, 1);
}

function bfs(arr, x, y) {}
