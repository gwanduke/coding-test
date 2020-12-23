/**
 * https://www.acmicpc.net/problem/2667
 *
 * 단지번호붙이기
 */

#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

int arr[30][30];
int check[26][26];
int n;

void dfs(int node1, int node2, int cnt) {
  if (arr[node1][node2] == 1 && check[node1][node2] == 0) {
    check[node1][node2] = cnt;

    if (node1 - 1 > 0) {
      dfs(node1 - 1, node2, cnt);
    }
    if (node1 + 1 <= n) {
      dfs(node1 + 1, node2, cnt);
    }
    if (node2 - 1 > 0) {
      dfs(node1, node2 - 1, cnt);
    }
    if (node2 + 1 <= n) {
      dfs(node1, node2 + 1, cnt);
    }
  }
}

int main() {
  // 지도의 크기 N 입력
  cin >> n;

  // N*N의 지도 입력
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n; j++) {
      scanf("%1d", &arr[i][j]);
    }
  }

  // dfs 수행, 단지수 출력
  int cnt = 0;
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n; j++) {
      if (arr[i][j] == 1 && check[i][j] == 0) {
        dfs(i, j, ++cnt);
      }
    }
  }
  cout << cnt << endl;

  // 단지내 가구수 출력
  int *result = new int[cnt]();
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n; j++) {
      result[check[i][j] - 1]++;
    }
  }

  // 가구수를 정렬 후 출력
  sort(result, result + cnt);
  for (int i = 0; i < cnt; i++) {
    cout << result[i] << endl;
  }

  return 0;
}