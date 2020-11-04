/**
 * https://www.acmicpc.net/problem/2667
 *
 * 단지번호붙이기
 */

#include <iostream>
#include <vector>
using namespace std;

int arr[26][26];
int check[26][26];

int dfs(int node1, int node2, int cnt)
{
    int now = cnt + 1;
    check[node1][node2] = true;

    if (node1 - 1 > 0 && arr[node1 - 1][node2] > 0)
    {
        dfs(node1 - 1, node2, cnt);
    }
    if (node1 + 1 < 26 && arr[node1 + 1][node2] > 0)
    {
        dfs(node1 + 1, node2, cnt);
    }
    if (node2 - 1 > 0 && arr[node1][node2 - 1] > 0)
    {
        dfs(node1, node2 - 1, cnt);
    }
    if (node2 + 1 < 26 && arr[node1][node2 + 1] > 0)
    {
        dfs(node1, node2 + 1, cnt);
    }

    return now;
}

int main()
{
    int n;
    cin >> n;

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n; j++)
        {
            scanf("%1d", &arr[i][j]);
            printf("%1d", &arr[i][j]);
        }
    }

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n; j++)
        {
            if (arr[i][j] && !check[i][j])
            {
                cout << "Hello";
                cout << dfs(i, j, 0);
            }
        }
    }

    return 0;
}