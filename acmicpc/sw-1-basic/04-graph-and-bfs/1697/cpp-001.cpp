/**
 * https://www.acmicpc.net/problem/1697
 *
 * 숨바꼭질
 */

#include <iostream>
#include <queue>
using namespace std;

const int MAX = 100001;
int check[MAX];

int main() {
  int n, k;
  queue<int> q;

  cin >> n;  // 수빈
  cin >> k;  // 동생

  q.push(n);
  check[n] = 1;

  while (!q.empty()) {
    int cur = q.front();
    q.pop();

    int token;
    token = cur - 1;
    if (0 <= token && check[token] == 0) {
      q.push(token);
      check[token] = check[cur] + 1;
    }

    token = cur + 1;
    if (token < MAX && check[token] == 0) {
      q.push(token);
      check[token] = check[cur] + 1;
    }

    token = cur * 2;
    if (token < MAX && check[token] == 0) {
      q.push(token);
      check[token] = check[cur] + 1;
    }
  }

  cout << check[k] - 1 << '\n';

  return 0;
}