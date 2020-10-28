/**
 * https://www.acmicpc.net/problem/15650
 *
 * N과 M (2)
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

const check = [];
const result = [];

function solve(line) {
  const [n, m] = line.split(" ").map(Number);

  go(0, n, m);
}

function go(index, n, m) {
  if (index === m) {
    console.log(result.join(" "));
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (check[index]) continue;

    const ok =
      (result[index - 1] && result[index - 1] < i) || !result[index - 1];

    if (ok) {
      check[index] = true;
      result[index] = i;

      // 또는 start 수를 넘김으로서 start ~ n 까지 검사해서 처리할 수 있겠다.
      go(index + 1, n, m);
      check[index] = false;
    }
  }
}
