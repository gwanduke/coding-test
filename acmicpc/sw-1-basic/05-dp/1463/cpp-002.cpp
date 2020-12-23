#include <iostream>

int memo[1000001];
int dy(int n) {
  if (n == 1) {
    memo[n] = 1;
  }

  if (memo[n] > 0) {
    return memo[n];
  }

  memo[n] = dy(n - 1) + 1;

  if (n % 2 == 0) {
    int temp = dy(n / 2) + 1;
    if (memo[n] > temp) {
      memo[n] = temp;
    }
  }

  if (n % 3 == 0) {
    int temp = dy(n / 3) + 1;
    if (memo[n] > temp) {
      memo[n] = temp;
    }
  }

  return memo[n];
}

int main() {
  std::cout << dy(10);
  return 0;
}