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
  const [, sum] = input[0].split(" ").map(Number);
  const numbers = input[1].split(" ").map(Number);

  let ans = go(numbers, sum, 0, 0);

  // RE: 문제에서 주어진 조건! 공집합을 제외하는 조건을 체크!
  if (sum === 0) {
    ans = ans - 1;
  }
  console.log(ans);
}

function go(arr, goal, sum, index) {
  if (index === arr.length) {
    if (sum === goal) {
      return 1;
    } else {
      return 0;
    }
  }

  // Next
  return (
    go(arr, goal, sum + arr[index], index + 1) + go(arr, goal, sum, index + 1)
  );
}
