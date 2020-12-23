/**
 * https://www.acmicpc.net/problem/11724
 *
 * 연결 요소의 개수
 */

#include <iostream>
#include <vector>

using namespace std;

int cnt = 0;
vector<int> arr[1001];
bool check[1001];

// int dfs(int node) <== 🧨NOTE: 반환타입을 지정했는데, 실제로 반환이 없는 경우 런타임 에러가 난다. 조심!
void dfs(int node)
{
    check[node] = true;
    for (int i = 0; i < arr[node].size(); i++)
    {
        int next = arr[node][i];
        if (check[next] == false)
        {
            dfs(next);
        }
    }
}

int main()
{
    int n, m;
    cin >> n;
    cin >> m;

    for (int i = 0; i < m; i++)
    {
        int start, dest;

        cin >> start;
        cin >> dest;

        arr[start].push_back(dest);
        arr[dest].push_back(start);
    }

    for (int i = 1; i <= n; i++)
    {
        if (!check[i])
        {
            dfs(i);
            cnt++;
        }
    }

    cout << cnt << endl;

    return 0;
}