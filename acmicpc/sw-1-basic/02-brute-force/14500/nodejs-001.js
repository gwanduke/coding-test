/**
 * https://www.acmicpc.net/problem/14500
 *
 * TODO: 테트로미노
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

  const board = []; // 2차원 배열의 보드
  for (let i = 0; i < n; i++) {
    board.push(input[i + 1].split(" "));
  }

  const tetrominos = [
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
    ], // 1
    [
      [0, 0],
      [1, 0],
      [0, 1],
      [1, 1],
    ], // 2

    [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 2],
    ], // 3
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [2, -1],
    ], // 3
    [
      [0, 0],
      [1, 0],
      [1, 1],
      [1, 2],
    ], // 3
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [2, 0],
    ], // 3

    [
      [0, 0],
      [0, 1],
      [1, 1],
      [1, 2],
    ], // 4

    [
      [0, 0],
      [1, 0],
      [2, 0],
      [1, 1],
    ],
  ];

  // TODO:
  console.log(input);
}
