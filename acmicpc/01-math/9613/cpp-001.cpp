/**
 * https://www.acmicpc.net/problem/9613
 *
 * GCD합
 */

#include <iostream>
using namespace std;

int gcd(int a, int b) {
  // gcd(a,b) === gcd(b, a%b) 일때 a%b ===0 이면 그때 b가 gcd
  if (b == 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

int numbers[1000001];
int main() {
  int t;
  cin >> t;

  for (int i = 0; i < t; i++) {
    int num;

    cin >> num;
    for (int j = 0; j < num; j++) {
      cin >> numbers[j];
    }

    long long sum = 0;
    for (int j = 0; j < num; j++) {
      for (int k = j + 1; k < num; k++) {
        sum += gcd(numbers[j], numbers[k]);
      }
    }

    cout << sum << endl;
  }

  return 0;
}