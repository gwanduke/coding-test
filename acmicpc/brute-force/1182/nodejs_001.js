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
  // TODO:
  const [size, sum] = input[0].split(" ").map(Number);
  const numbers = input[1].split(" ").map(Number);

  let ans = go(numbers, sum, 0, 0);
  if (sum === 0) {
    ans = ans - 1;
  }
  console.log(ans);
}

// 구하고자 하는 것: 부분수열의 "개수"
/**
 * index 번째 수를 포함할지 말지 체크하고 처리
 */
function go(arr, goal, sum, index) {
  if (index === arr.length) {
    if (sum === goal) {
      return 1;
    } else {
      return 0;
    }
  }
  // if (arr.length === 0) {
  //   return 0;
  // }

  // // solved
  // if (sum === goal && arr.length === index) {
  //   return 1;
  // }

  // // Done
  // if (sum !== goal && index >= arr.length) {
  //   return 0;
  // }

  // Next
  return (
    go(arr, goal, sum + arr[index], index + 1) + go(arr, goal, sum, index + 1)
  );
}
