/**
 * https://www.acmicpc.net/problem/7576
 *
 * 토마토
 */

#include <iostream>
#include <queue>
using namespace std;

int n, m;               // n: 행, m: 열 - 2 <= M,N <= 1000
int cells[1001][1001];  // 1 익은, 0 익지않은, -1 없는
int visited[1001][1001];
bool already = true;
queue<pair<int, int> > q;

int dRow[] = {-1, 0, 1, 0};
int dCol[] = {0, 1, 0, -1};

void bfs() {
  while (!q.empty()) {
    pair<int, int> cur = q.front();
    int curRow = cur.first;
    int curCol = cur.second;

    q.pop();

    for (int i = 0; i < 4; i++) {
      int nextRow = curRow + dRow[i];
      int nextCol = curCol + dCol[i];

      if (1 <= nextRow && nextRow <= n && 1 <= nextCol && nextCol <= m) {
        if (visited[nextRow][nextCol] == 0 && cells[nextRow][nextCol] == 0) {
          pair<int, int> nextCell = make_pair(nextRow, nextCol);
          visited[nextRow][nextCol] = visited[curRow][curCol] + 1;
          q.push(nextCell);
        }
      }
    }
  }
}

int main() {
  cin >> m;
  cin >> n;

  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= m; j++) {
      cin >> cells[i][j];

      if (cells[i][j] == 0) {
        already = false;
      }
    }
  }

  if (already) {
    cout << 0;
    return 0;
  }

  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= m; j++) {
      if (cells[i][j] == 1) {
        q.push(make_pair(i, j));
        visited[i][j] = 1;
      }
    }
  }
  bfs();

  int max = 0;
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= m; j++) {
      if (visited[i][j] == 0 && cells[i][j] == 0) {
        cout << -1;
        return 0;
      }

      if (visited[i][j] > max) {
        max = visited[i][j];
      }
    }
  }

  cout << max - 1;

  return 0;
}