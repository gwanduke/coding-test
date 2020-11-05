/**
 * https://www.acmicpc.net/problem/14226
 *
 * 이모티콘
 */

#include <iostream>
#include <queue>
using namespace std;

int s;
int dist[1001][1001];
queue<pair<int, int> > q;

void bfs() {
  while (!q.empty()) {
    pair<int, int> cur = q.front();
    q.pop();
    int s = cur.first;
    int c = cur.second;

    if (0 <= s && dist[s][s] == 0) {
      q.push(make_pair(s, s));
      dist[s][s] = dist[s][c] + 1;
    }

    if (c != 0 && 0 <= s + c && s + c < 1001 && dist[s + c][c] == 0) {
      q.push(make_pair(s + c, c));
      dist[s + c][c] = dist[s][c] + 1;
    }

    if (0 <= s - 1 && dist[s - 1][c] == 0) {
      q.push(make_pair(s - 1, c));
      dist[s - 1][c] = dist[s][c] + 1;
    }
  }
}

int main() {
  cin >> s;

  q.push(make_pair(1, 0));

  bfs();

  int min = -1;
  for (int i = 0; i < 1001; i++) {
    if (dist[s][i] != 0) {
      if (min == -1 || min > dist[s][i]) {
        min = dist[s][i];
      }
    }
  }

  cout << min;
  return 0;
}