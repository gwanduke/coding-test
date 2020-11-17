/**
 * https://programmers.co.kr/learn/courses/30/lessons/12914
 *
 * 멀리뛰기
 */

#include <iostream>

using namespace std;

long long mem[2001];

long long solution(int n) {
  mem[1] = 1;
  mem[2] = 2;

  if (mem[n]) {
    return mem[n];
  }

  for (int i = 3; i <= n; i++) {
    mem[i] = (mem[i - 1] + mem[i - 2]) % 1234567;
  }

  return mem[n];
}

int main() {
  cout << solution(4) << endl;  // 5
  cout << solution(3) << endl;  // 3

  return 0;
}