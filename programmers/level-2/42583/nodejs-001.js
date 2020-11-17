/**
 * https://programmers.co.kr/learn/courses/30/lessons/42583
 *
 * 다리를 지나는 트럭
 */
function sumArr(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

function solution(bridge_length, weight, truck_weights) {
  // Stack으로 취급하기 위한 처리
  truck_weights = truck_weights.reverse();

  var answer = 0;

  const movingWeights = []; // 다리에 올라간 중량
  const movingTimes = []; // 다리에 올라간 중량의 남은 이동 시간

  let nextWeight = truck_weights[truck_weights.length - 1];
  while (nextWeight) {
    // 다리 위 중량들에 대한 시간 처리
    for (let i = 0; i < movingTimes.length; i++) {
      movingTimes[i] -= 1;

      if (movingTimes[i] === 0) {
        movingWeights.shift();
        movingTimes.shift();
        i--;
      }
    }

    // 다음 중량이 올라가도 견딜 수 있으면 다리에 올림
    if (sumArr([...movingWeights, nextWeight]) <= weight) {
      movingWeights.push(truck_weights.pop());
      movingTimes.push(bridge_length);
    }

    nextWeight = truck_weights[truck_weights.length - 1];
    answer++;
  }

  return answer + Math.max(...movingTimes);
}
