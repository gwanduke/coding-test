/**
 * https://www.acmicpc.net/problem/1707
 *
 * 이분 그래프
 */

#include <iostream>
#include <vector>
using namespace std;

vector<int> arr[20001];
int color[20001];

bool dfs(int start, int c)
{
    color[start] = c;

    for (int i = 0; i < arr[start].size(); i++)
    {
        int next = arr[start][i];

        if (color[next] == 0)
        {
            if (dfs(next, 3 - c) == false)
            {
                return false;
            }
        }
        else
        {
            if (color[next] == c)
            {
                return false;
            }
        }
    }

    return true;
}

int main()
{
    int test_case_cnt;
    cin >> test_case_cnt;

    for (int i = 0; i < test_case_cnt; i++)
    {
        int v, e;
        cin >> v;
        cin >> e;

        for (int k = 0; k <= v; k++)
        {
            arr[k].clear();
            color[k] = 0;
        }

        for (int j = 0; j < e; j++)
        {
            int s;
            int d;

            cin >> s;
            cin >> d;

            arr[s].push_back(d);
            arr[d].push_back(s);
        }

        bool ok = true;
        for (int k = 1; k <= v; k++)
        {
            if (color[k] == 0)
            {
                if (dfs(k, 1) == false)
                {
                    ok = false;
                }
            }
        }

        // 🧨NOTE: 결과출력에 cout 대신 printf를 사용해야만 정답처리 될 때가 있다. 아마 cout이 마지막 엔터를 인식하거나, 데이터 입력중에 프린트 되어서 그런듯하다.
        printf("%s\n", ok ? "YES" : "NO");
        // if (ok)
        // {
        //     cout << "YES";
        // }
        // else
        // {
        //     cout << "NO";
        // }
    }

    return 0;
}