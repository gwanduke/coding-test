// https://www.acmicpc.net/problem/1463
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

const memo = {
  1: 0,
  2: 1,
  3: 1,
};
const f = (num) => {
  if (memo[num]) return memo[num];

  const results = [];

  results.push(num - 1);
  if (num % 3 === 0) {
    results.push(num / 3);
  }
  if (num % 2 === 0) {
    results.push(num / 3);
  }

  memo[num] = Math.min(results);
};

function solve(line) {
  console.log(line);
}

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on("line", function (line) {
//   run(line);
//   rl.close();
// }).on("close", function () {
//   process.exit();
// });

// function run(line) {
//   let num = Number(line);
//   console.log(dodo(num));
// }

// function dodo(num) {
//   if (num % 3 === 0) {
//     num = num / 3;
//   } else if (num % 2 === 0) {
//     num = num / 2;
//   } else {
//     num = num - 1;
//   }

//   if (num !== 1) {
//     return dodo(num);
//   }

//   return num;
// }
