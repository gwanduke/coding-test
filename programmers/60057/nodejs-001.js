/**
 * https://programmers.co.kr/learn/courses/30/lessons/60057
 *
 * 코딩테스트 연습
 * 2020 KAKAO BLIND RECRUITMENT
 * 문자열 압축
 */

function solution(s) {
  const len = s.length;

  let final = -1;
  for (let chunk = 1; chunk <= Math.floor(len / 2); chunk++) {
    const candidates = [];
    const chunkCount = Math.ceil(s.length / chunk);

    for (let i = 0; i < chunkCount; i++) {
      candidates.push(s.substr(i * chunk, chunk));
    }

    let prev = null;
    let curr = null;
    let cnt = 1;
    let rst = "";
    candidates.forEach((word, index) => {
      prev = curr;
      curr = word;

      if (prev === null) {
      } else {
        if (prev === curr) {
          cnt++;
          if (index === candidates.length - 1) {
            cnt === 1 ? (rst += prev) : (rst += `${cnt}${prev}`);
          }
        } else {
          cnt === 1 ? (rst += prev) : (rst += `${cnt}${prev}`);
          cnt = 1;

          if (index === candidates.length - 1) {
            cnt === 1 ? (rst += curr) : (rst += `${cnt}${curr}`);
          }
        }
      }
    });

    if (final === -1 || final > rst.length) {
      final = rst.length;
    }
  }

  return final === -1 ? 1 : final;
}
