// https://www.acmicpc.net/problem/1759
// 구하고자 하는 것: 가능성 있는 모든 암호 출력
// - 문자들은 알파벳 소문자, 중복은 없음
// - 암호는 오름 차순
// - C: 문자의 종류 수
// - L: 암호의 길이

// 불가능한 경우 - length >= goal
// 답을 찾은 경우 - password.length === length
// 다음 답을 찾아야하는 경우

function checkWord(word) {
  const mo = ["a", "e", "i", "o", "u"].filter((alpha) => word.includes(alpha))
    .length;
  const ja = word.length - mo;

  return mo >= 1 && ja >= 2;
}

/**
 * goal: 찾아야하는 길이
 * cur: 현재 알파벳 인덱스
 * password: 해답
 * alpha: 알파벳 배열
 */
function go(password, goal, alpha, cur) {
  if (password.length === goal) {
    if (checkWord(password)) {
      console.log(password);
    }
    return;
  }

  if (cur >= alpha.length) {
    return;
  }

  go(password + alpha[cur], goal, alpha, cur + 1);
  go(password, goal, alpha, cur + 1);
}

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
  const [len] = input[0].split(" ");
  const alpha = input[1].split(" ");

  go("", Number(len), alpha.sort(), 0);
}
