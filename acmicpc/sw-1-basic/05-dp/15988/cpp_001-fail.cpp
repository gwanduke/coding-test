/**
 * https://www.acmicpc.net/problem/15988
 *
 * 1, 2, 3 더하기 3
 */

#include <iostream>
using namespace std;

int memo[1000001];

int go(int n)
{
    if (n == 1)
    {
        memo[n] = 1;
    }
    if (n == 2)
    {
        memo[n] = 2;
    }
    if (n == 3)
    {
        memo[n] = 4;
    }

    if (memo[n] > 0)
        return memo[n];

    memo[n] = (go(n - 1) + go(n - 2) + go(n - 3));
    return memo[n];
}

int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int n;
        cin >> n;
        std::cout << go(n) % 1000000009 << '\n';
    }

    return 0;
}
