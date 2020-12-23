/**
 * https://www.acmicpc.net/problem/1978
 *
 * 소수 찾기
 */

#include <iostream>
using namespace std;
bool che[1001] = {false};  // false이면 소수

void makeChe() {
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
}

int main() {
  makeChe();

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