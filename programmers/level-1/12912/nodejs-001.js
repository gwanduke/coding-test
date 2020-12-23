function solution(a, b) {
  var answer = 0;
  let min = a,
    max = b;

  if (a > b) {
    min = b;
    max = a;
  }

  for (let i = min; i <= max; i++) {
    answer += i;
  }

  return answer;
}
