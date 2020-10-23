// https://www.acmicpc.net/problem/9095

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

function go(now, goal) {
  if (now > goal) {
    return 0;
  }

  if (now === goal) {
    return 1;
  }

  return [1, 2, 3]
    .map((i) => go(now + i, goal))
    .reduce((acc, cur) => acc + cur);
}

function solve(input) {
  console.log(input.slice(1, input.length));
  input.slice(1, input.length).forEach((sum) => {
    console.log(go(0, Number(sum)));
  });
}
