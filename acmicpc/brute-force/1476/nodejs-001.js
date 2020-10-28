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

  let year = 1;
  let E = 1;
  let S = 1;
  let M = 1;

  while (true) {
    if (E === e && S === s && M === m) {
      console.log(year);
      return;
    }

    year = year + 1;
    E++;
    S++;
    M++;

    if (E > 15) E = 1;
    if (S > 28) S = 1;
    if (M > 19) M = 1;
  }
}
