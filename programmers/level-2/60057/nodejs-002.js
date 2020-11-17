/**
 * https://programmers.co.kr/learn/courses/30/lessons/60057
 *
 * 코딩테스트 연습
 * 2020 KAKAO BLIND RECRUITMENT
 * 문자열 압축
 */

function tokenize(s, chunkSize) {
  const arr = [];
  const chunkCount = Math.ceil(s.length / chunkSize);
  for (let i = 0; i < chunkCount; i++) {
    arr.push(s.substr(i * chunkSize, chunkSize));
  }

  return arr;
}

function solution(s) {
  const len = s.length;
  let final = -1;

  for (let chunk = 1; chunk <= Math.floor(len / 2); chunk++) {
    const tokens = tokenize(s, chunk);
    let str = "";
    let prev = tokens[0];
    let cnt = 1;

    for (let i = 1; i < tokens.length; i++) {
      if (prev === tokens[i]) {
        cnt++;
      } else {
        if (cnt !== 1) str += cnt;
        str += prev;
        prev = tokens[i];
        cnt = 1;
      }
    }

    if (cnt != 1) str += cnt;
    str += prev;

    console.log(tokens, str);

    if (final === -1 || final > str.length) {
      final = str.length;
    }
  }

  return final === -1 ? 1 : final;
}
