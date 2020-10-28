/**
 * https://www.acmicpc.net/problem/10971
 *
 * TODO: 외판원 순회 2
 *
 * O(N x N!)
 */

const next_permutation = require("../../../utils/next_permutation");

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
  const [n, ...rest] = input;
  const costMap = rest.map((line) => line.split(" ").map(Number));

  let arr = Array(n)
    .fill(0)
    .map((_, index) => index + 1)
    .sort((x, y) => x - y);

  let min = 1000000 * n;

  do {
    let cost = 0;
    for (let i = 0; i < arr.length; i++) {
      if (i === arr.length - 1) {
        cost += costMap[i][0];
      } else {
        cost += costMap[i][i + 1];
      }
    }

    if (cost < min) {
      min = cost;
    }
  } while ((arr = next_permutation(arr)));

  console.log(min);
}
