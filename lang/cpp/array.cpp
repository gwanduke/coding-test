#include <iostream>

using namespace std;

int main()
{
    int grade[4] = {0};
    int birth[] = {1990, 1991, 1992, 0};
    int sum = 0;

    grade[0] = 90;
    grade[1] = 100;
    grade[2] = 50;

    for (int i = 0; i < 4; i++)
    {
        sum += grade[i];

        if (birth[i])
        {

            cout << "birth " << i << ":" << birth[i] << endl;
        }
    }

    cout << sum;
}