/* 
 * 인접리스트를 이용한 풀이
 */

/**    
 * V: 1 ~ 8
 * 
 * E:
 * 1 -- 2  5
 * |      /
 * 3 -- 4 -- 6 -- 7
 *      |
 *      8
 */

#include <iostream>
#include <vector>
using namespace std;

// 정점 1~8에 대한 인접 리스트
vector<int> list[9];

// 0 (사용안함), 1~8 (정점을 방문 했는지 여부)
bool visit[9];

void dfs(int vertex)
{
    // 해당 정점을 방문 했다고 기록
    visit[vertex] = true;

    // 방문과 동시에 출력
    cout << vertex << '\n';

    for (int i = 0; i < list[vertex].size(); i++)
    {
        int next = list[vertex][i];
        if (!visit[next])
        {
            dfs(next);
        }
    }
}

int main()
{
    list[1].push_back(2);
    list[1].push_back(3);
    list[2].push_back(1);
    list[3].push_back(1);
    list[3].push_back(4);
    list[4].push_back(3);
    list[4].push_back(5);
    list[4].push_back(6);
    list[4].push_back(8);
    list[5].push_back(4);
    list[6].push_back(4);
    list[6].push_back(7);
    list[7].push_back(6);
    list[8].push_back(4);

    dfs(1); // 정점 1에서 시작

    return 0;
}