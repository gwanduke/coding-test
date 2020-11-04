/**
 * https://www.acmicpc.net/problem/1260
 *
 * DFS와 BFS
 */

#include <cstdio>
#include <algorithm>
#include <cstring>
#include <vector>
#include <queue>
using namespace std;

vector<int> a[1001];
bool check[1001];

void dfs(int v)
{
    check[v] = true;
    printf("%d ", v);

    for (int i = 0; i < a[v].size(); i++)
    {
        int next = a[v][i];
        if (!check[next])
        {
            dfs(next);
        }
    }
}

void bfs(int v)
{
    queue<int> q;
    memset(check, false, sizeof(check));

    q.push(v);
    check[v] = true;

    while (!q.empty())
    {
        int node = q.front();
        q.pop();
        printf("%d ", node);

        for (int i = 0; i < a[node].size(); i++)
        {

            int dest = a[node][i];
            if (!check[dest])
            {
                check[dest] = true;
                q.push(dest);
            }
        }
    }
}

int main()
{
    int n, m, start;
    scanf("%d %d %d", &n, &m, &start);

    // 인접 리스트 생성
    for (int i = 0; i < m; i++)
    {
        int u, v;
        scanf("%d %d", &u, &v);
        a[u].push_back(v);
        a[v].push_back(u);
    }

    // 정렬
    for (int i = 1; i <= n; i++)
    {
        sort(a[i].begin(), a[i].end());
    }

    dfs(start);
    puts("");
    bfs(start);
    puts("");
    return 0;
}