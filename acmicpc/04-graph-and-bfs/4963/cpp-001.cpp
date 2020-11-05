/**
 * https://www.acmicpc.net/problem/4963
 *
 * 섬의 개수
 */

#include <iostream>
#include <vector>
using namespace std;

int w = 0;
int h = 0;
int mapArr[51][51];
bool check[51][51];

int dx[8] = {-1, -1, 0, 1, 1, 1, 0, -1};
int dy[8] = {0, 1, 1, 1, 0, -1, -1, -1};

void dfs(int row, int col) {
  check[row][col] = true;

  for (int i = 0; i < 8; i++) {
    int newRow = row + dx[i];
    int newCol = col + dy[i];

    if (1 <= newRow && newRow <= h && 1 <= newCol && newCol <= w) {
      if (mapArr[newRow][newCol] == 1 && check[newRow][newCol] == false) {
        dfs(newRow, newCol);
      }
    }
  }
}

int main() {
  while (true) {
    for (int i = 1; i <= 51; i++) {
      for (int j = 1; j <= 51; j++) {
        mapArr[i][j] = 0;
        check[i][j] = false;
      }
    }

    // w, h 입력 (0 < w,h <= 50)
    cin >> w;
    cin >> h;

    if (w != 0 && h != 0) {
      for (int i = 1; i <= h; i++) {    // 행
        for (int j = 1; j <= w; j++) {  // 열
          cin >> mapArr[i][j];
        }
      }

      int cnt = 0;
      for (int i = 1; i <= h; i++) {    // 행
        for (int j = 1; j <= w; j++) {  // 열
          if (mapArr[i][j] == 1 && check[i][j] == false) {
            dfs(i, j);
            cnt++;
          }
        }
      }

      printf("%d\n", cnt);
    } else {
      break;
    }
  }

  return 0;
}