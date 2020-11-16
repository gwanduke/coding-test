#include <iostream>

using namespace std;

long long go(int n, int len) {
  if (len == n) {
    return 1;
  }

  if (len > n) {
    return 0;
  }

  return go(n, len + 1) + go(n, len + 2);
}

long long solution(int n) { return go(n, 0) % 1234567; }

int main() {
  cout << solution(4) << endl;     // 5
  cout << solution(3) << endl;     // 3
  cout << solution(2000) << endl;  // ? --> 시간초과

  return 0;
}