/**
 * https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV15FZuqAL4CFAYD
 *
 * 단순 2진 암호코드
 */

#include <cmath>
#include <iostream>

using namespace std;

int input[51][101];

int main(int argc, char** argv) {
  int test_case;
  int T;

  cin >> T;

  for (test_case = 1; test_case <= T; ++test_case) {
    int n;  // 세로
    int m;  // 가로

    cin >> n >> m;

    for (int i = 0; i < n; i++) {
      for (int j = 0; j < m; j++) {
        scanf("%1d", &input[i][j]);
      }
    }

    int row = -1;
    int end_index = -1;
    int start_index = -1;

    for (int i = 0; i < n; i++) {
      for (int j = m - 1; 0 <= j; j--) {
        if (end_index == -1 && start_index == -1) {
          if (input[i][j] == 1) {
            row = i;
            end_index = j;
            start_index = j - 55;
          }
        }
      }
    }

    // cout << "****************" << endl;
    // cout << row << endl;
    // cout << start_index << endl;
    // cout << end_index << endl;
    // cout << "****************" << endl;

    int numbers[8];

    for (int i = 0; i < 8; i++) {
      int number = 0;
      int col = start_index + (i * 7);

      number += input[row][col] * pow(2, 6);
      number += input[row][col + 1] * pow(2, 5);
      number += input[row][col + 2] * pow(2, 4);
      number += input[row][col + 3] * pow(2, 3);
      number += input[row][col + 4] * pow(2, 2);
      number += input[row][col + 5] * pow(2, 1);
      number += input[row][col + 6] * pow(2, 0);

      numbers[i] = number;
    }

    int result[8];
    for (int i = 0; i < 8; i++) {
      switch (numbers[i]) {
        case 13:
          result[i] = 0;
          break;
        case 25:
          result[i] = 1;
          break;
        case 19:
          result[i] = 2;
          break;
        case 61:
          result[i] = 3;
          break;
        case 35:
          result[i] = 4;
          break;
        case 49:
          result[i] = 5;
          break;
        case 47:
          result[i] = 6;
          break;
        case 59:
          result[i] = 7;
          break;
        case 55:
          result[i] = 8;
          break;
        case 11:
          break;
          result[i] = 9;
          break;
        default:
          break;
      }
    }

    int odd = result[0] + result[2] + result[4] + result[6];
    int even = result[1] + result[3] + result[5];
    int check = result[7];

    if (((odd * 3 + even) + check) % 10 == 0) {
      int total = 0;
      for (int i = 0; i < 8; i++) {
        total = total + result[i];
      }

      printf("#%d %d\n", test_case, total);
    } else {
      printf("#%d %d\n", test_case, 0);
    }
  }

  return 0;  //정상종료시 반드시 0을 리턴해야합니다.
}