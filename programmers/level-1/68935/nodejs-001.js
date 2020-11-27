/**
 * https://programmers.co.kr/learn/courses/30/lessons/68935
 */

function solution(n) {
  return n3to10(n10to3(n));
}

function n10to3(num) {
  if (num < 3) {
    return String(num);
  }

  const rests = [];

  do {
    let rest = num % 3;
    num = Math.floor(num / 3);

    rests.push(rest);
    if (num < 3) {
      rests.push(num);
    }
  } while (num >= 3);

  return rests.join("");
}

function n3to10(numStr) {
  let tot = 0;
  let j = 0;
  for (let i = numStr.length - 1; i >= 0; i--) {
    if (numStr[i] !== "0") {
      tot = tot + Number(numStr[i]) * Math.pow(3, j);
    }
    j++;
  }

  return tot;
}
