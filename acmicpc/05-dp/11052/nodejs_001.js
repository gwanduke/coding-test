/**
 * https://www.acmicpc.net/problem/11052
 *
 * 카드 구매하기
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
  // TODO:
  console.log(input);
}
