/**
 * https://programmers.co.kr/learn/courses/30/lessons/42840
 *
 * 모의고사
 */

function solution(answers) {
  let a = [1, 2, 3, 4, 5];
  let b = [2, 1, 2, 3, 2, 4, 2, 5];
  let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const counts = [0, 0, 0];
  answers.forEach((answer, index) => {
    a[index % a.length] === answer && counts[0]++;
    b[index % b.length] === answer && counts[1]++;
    c[index % c.length] === answer && counts[2]++;
  });

  const max = Math.max(...counts);
  const answer = [];
  counts.forEach((c, index) => c === max && answer.push(index + 1));

  return answer;
}
