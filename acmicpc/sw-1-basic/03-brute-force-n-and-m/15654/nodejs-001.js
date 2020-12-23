/**
 * https://www.acmicpc.net/problem/15654
 *
 * N과 M (5)
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

let rst = "";
function solve(input) {
  const [maxNumber, len] = input[0].split(" ").map(Number);
  const numbers = input[1].split(" ").map(Number);

  go(
    numbers.sort((x, y) => x - y),
    maxNumber,
    len,
    0, // index
    []
  );
  console.log(rst);
}

const check = [];
/**
 *
 * @param {*} maxNumber 최대 숫자
 * @param {*} len 길이가 몇인 수열을 구하는지
 * @param {*} index 현재 구하는 수열의 인덱스 (0 ~ len - 1)
 */
function go(numbers, maxNumber, len, index, result) {
  if (len === index) {
    rst = rst + result.map((num) => numbers[num - 1]).join(" ") + "\n";
    return;
  }

  if (len <= index) {
    return;
  }

  for (let i = 1; i <= maxNumber; i++) {
    if (check[i]) continue;
    check[i] = true;
    go(numbers, maxNumber, len, index + 1, [...result, i]);
    check[i] = false;
  }
}
