/**
 * https://www.acmicpc.net/problem/6603
 *
 * TODO: 로또
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
  input.forEach((line, index) => {
    if (line.length !== index + 1) {
      const [number, ...numbers] = line.split(" ").map((n) => Number(n));
      if (number === 0 && numbers.length === 0) {
        return;
      }

      go(numbers, 0, []);
      console.log("");
    }
  });
}

function go(arr, cur, result) {
  if (result.length === 6) {
    console.log([...result].join(" "));
    return;
  }

  if (cur > arr.length - 1) {
    return;
  }

  go(arr, cur + 1, [...result, arr[cur]]);
  go(arr, cur + 1, [...result]);
}
