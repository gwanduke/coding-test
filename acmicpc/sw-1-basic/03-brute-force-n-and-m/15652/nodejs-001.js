/**
 * https://www.acmicpc.net/problem/15652
 *
 * N과 M (4)
 */

let rst = "";

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
  const [maxNumber, len] = line.split(" ").map(Number);

  go(maxNumber, len, 1, 0, []);
  console.log(rst);
}

/**
 *
 * @param {*} maxNumber 최대 숫자
 * @param {*} len 길이가 몇인 수열을 구하는지
 * @param {*} start 시작 숫자
 * @param {*} index 현재 구하는 수열의 인덱스 (0 ~ len - 1)
 */
function go(maxNumber, len, start, index, result) {
  if (len === index) {
    rst = rst + result.join(" ") + "\n";
    return;
  }

  if (len <= index) {
    return;
  }

  for (let i = start; i <= maxNumber; i++) {
    go(maxNumber, len, i, index + 1, [...result, i]);
  }
}
