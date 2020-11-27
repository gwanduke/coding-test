#include <iostream>
using namespace std;

int gcd(int a, int b) {
  int g = 1;
  for (int i = 1; i <= min(a, b); i++) {
    if (a % i == 0 && b % i == 0) {
      g = i;
    }
  }

  return g;
}

int lcm(int a, int b) { return (a * b) / gcd(a, b); }

int main() {
  int a, b;
  cin >> a >> b;

  cout << gcd(a, b) << endl << lcm(a, b);
}