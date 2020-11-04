/**
 * https://www.acmicpc.net/problem/1476
 *
 * 날짜 계산
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

function solve(line) {
  const [e, s, m] = line.split(" ").map(Number);

  let year = 0;
  let E = e - 1;
  let S = s - 1;
  let M = m - 1;

  while (true) {
    if (year % 15 === E && year % 28 === S && year % 19 === M) {
      console.log(year + 1);
      break;
    }
    year++;
  }
}
