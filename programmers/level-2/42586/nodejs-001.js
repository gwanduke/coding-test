// https://programmers.co.kr/learn/courses/30/lessons/42586
function solution(progresses, speeds) {
  var answer = [];

  progresses.reverse();
  speeds.reverse();

  while (progresses.length > 0) {
    let poped = 0;

    progresses = progresses.map((p, index) => {
      return p + speeds[index];
    });
    const first = progresses[progresses.length - 1];

    if (first >= 100) {
      for (let i = progresses.length - 1; i >= 0; i--) {
        const p = progresses[i];
        if (p >= 100) {
          poped++;
        } else {
          break;
        }
      }
    }

    for (let i = 0; i < poped; i++) {
      progresses.pop();
    }
    if (poped > 0) {
      answer.push(poped);
    }
  }

  return answer;
}

// NOTE: 좀 더 수학적인 접근법을 사용하면 N시간에 풀 수 있겠다. 진행도를 100 - o 로
