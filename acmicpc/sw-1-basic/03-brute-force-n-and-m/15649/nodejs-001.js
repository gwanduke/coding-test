/**
 * https://www.acmicpc.net/problem/15649
 *
 * N과 M (1)
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

const c = [];
const r = [];

function solve(line) {
  const [n, m] = line.split(" ").map(Number);

  go(0, n, m);
}

function go(index, n, m) {
  if (index === m) {
    console.log(r.join(" "));
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (c[i]) continue;
    c[i] = true;
    r[index] = i;
    go(index + 1, n, m);
    c[i] = false;
  }
}
