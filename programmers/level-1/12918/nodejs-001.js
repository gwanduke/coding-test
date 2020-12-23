function solution(s) {
  var answer = false;
  const originLen = s.length;
  s = s
    .trim()
    .split("")
    .map((c) => Number(c))
    .filter((c) => !isNaN(c))
    .join("");

  if (
    s.length === originLen &&
    (s.length === 4 || s.length === 6) &&
    !isNaN(Number(s))
  ) {
    answer = true;
  }
  return answer;
}
