// https://www.acmicpc.net/problem/14888
// 연산자 끼워넣기

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

function go(countOfNumbers, numbers, operators, index, op) {
  if (index + 1 === countOfNumbers - 1) {
    // min, max 판단
  }

  go(countOfNumbers, numbers, operators, index + 1, "+");
  go(countOfNumbers, numbers, operators, index + 1, "-");
  go(countOfNumbers, numbers, operators, index + 1, "x");
  go(countOfNumbers, numbers, operators, index + 1, "/");
}

function solve(input) {
  const countOfNumbers = Number(input[0]);
  const numbers = input[1].split(" ").map(Number);
  const [plus, minus, multi, divide] = input[2].split(" ").map(Number);

  const operators = [
    ...Array(plus).fill("+"),
    ...Array(minus).fill("-"),
    ...Array(multi).fill("x"),
    ...Array(divide).fill("/"),
  ];

  // TODO:
  console.log(input);
}
