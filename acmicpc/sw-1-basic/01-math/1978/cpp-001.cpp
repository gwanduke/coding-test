/**
 * https://www.acmicpc.net/problem/1978
 *
 * 소수 찾기
 */

#include <iostream>
using namespace std;

int numbers[101];

bool isPrime(int num) {
  bool flag = true;
  for (int i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

int main() {
  bool che[1001] = {false};
  che[0] = true;
  che[1] = true;
  int m = 1000;
  for (int i = 2; i <= m; i++) {
    if (che[i] == false) {
      for (int j = i + i; j <= m; j += i) {
        che[j] = true;
      }
    }
  }

  // 올바르지 않은 소수가 che에 있는지 확인
  for (int i = 2; i <= m; i++) {
    if (isPrime(i) && che[i]) {
      cout << i << " ";
    }
  }

  int n;
  cin >> n;
  int found = 0;
  for (int i = 0; i < n; i++) {
    int num;
    cin >> num;

    if (che[num] == false) {
      found++;
    }
  }

  cout << found;

  return 0;
}