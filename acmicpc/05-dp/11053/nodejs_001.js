// https://www.acmicpc.net/problem/11053
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
  const size = Number(input[0]);
  const numbers = input[1].split(" ").map(Number);

  const count = [1];
  let largestIndex = 0;

  for (let i = 0; i < size; i++) {
    if (numbers[largestIndex] < numbers[i]) {
      count[i] = count[largestIndex] + 1;
      largestIndex = i;
    }
  }

  console.log(count[largestIndex]);
}
