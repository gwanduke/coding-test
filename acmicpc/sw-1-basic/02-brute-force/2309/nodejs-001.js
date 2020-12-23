/**
 * https://www.acmicpc.net/problem/2309
 *
 * 일곱 난쟁이
 *
 * O(N^3)
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
  const heights = input.map(Number);

  const total = heights.reduce((acc, cur) => acc + cur, 0);

  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights.length; j++) {
      if (j === i) {
      } else {
        if (total - heights[i] - heights[j] === 100) {
          const rst = [];
          for (let k = 0; k < heights.length; k++) {
            if (k !== i && k !== j) rst.push(heights[k]);
          }
          rst
            .sort((a, b) => Number(a) - Number(b))
            .forEach((r) => console.log(r));
          return;
        }
      }
    }
  }
}
