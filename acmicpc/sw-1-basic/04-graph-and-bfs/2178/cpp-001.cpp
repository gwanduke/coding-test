/**
 * https://www.acmicpc.net/problem/2178
 *
 * 미로 탐색
 */

#include <iostream>
#include <queue>
#include <vector>
using namespace std;

int n, m;  // 2 <= N, M <= 100
int mapArr[101][101];
int check[101][101];
queue<pair<int, int> > q;

int dRow[8] = {-1, 0, 1, 0};
int dCol[8] = {0, 1, 0, -1};

void bfs() {
  while (!q.empty()) {
    pair<int, int> current = q.front();
    q.pop();
    if (current.first == n && current.second == m) {
      cout << check[n][m];
      break;
    }

    for (int i = 0; i < 4; i++) {
      int nextRow = current.first + dRow[i];
      int nextCol = current.second + dCol[i];

      if (0 < nextRow && 0 < nextCol && nextRow <= n;
          nextCol <= m && mapArr[nextRow][nextCol] == 1 &&
          check[nextRow][nextCol] == 0) {
        check[nextRow][nextCol] = check[current.first][current.second] + 1;
        q.push(make_pair(nextRow, nextCol));
      }
    }
  }
}

int main() {
  cin >> n;
  cin >> m;

  // N x M
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= m; j++) {
      scanf("%1d", &mapArr[i][j]);
    }
  }

  q.push(make_pair(1, 1));
  check[1][1] = 1;
  bfs();

  return 0;
}