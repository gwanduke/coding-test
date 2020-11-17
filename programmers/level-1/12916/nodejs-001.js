// https://programmers.co.kr/learn/courses/30/lessons/12916
function solution(s) {
  var answer = true;

  let countY = 0;
  let countP = 0;
  s.toUpperCase()
    .split("")
    .forEach((c) => {
      if (c === "P") {
        countP++;
      } else if (c === "Y") {
        countY++;
      } else {
      }
    });

  return countY === countP;
}
