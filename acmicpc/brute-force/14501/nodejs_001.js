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

const result = [0];
function solve(input) {
  const [days, ...rows] = input;

  const t = rows.map((row) => Number(row.split(" ")[0]));
  const p = rows.map((row) => Number(row.split(" ")[1]));

  go(Number(days) - 1, t, p, 0, 0);

  console.log(Math.max(...result));
}

/**
 * n일 째를 선택할지 말지
 */
function go(maxDay, t, p, n, curTotal) {
  if (maxDay + 1 === n) {
    curTotal && result.push(curTotal);
    return;
  }

  if (maxDay < n) {
    return;
  }

  // 선택한다
  go(maxDay, t, p, n + t[n], curTotal + p[n]);

  // 선택 안한다
  go(maxDay, t, p, n + 1, curTotal);
}
