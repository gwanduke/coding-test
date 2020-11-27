/**
 * https://www.acmicpc.net/problem/1934
 *
 * 최소공배수
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

function gcd(a, b) {
  // gcd(a, b) === gcd(b, a%b) 일때, a%b ===0이라면 그 때 b가 최대 공약수
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }

  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solve(input) {
  for (let i = 1; i < input.length; i++) {
    const [a, b] = input[i].split(" ");
    console.log(lcm(Number(a), Number(b)));
  }
}
