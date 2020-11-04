#include <vector>
#include <iostream>
using namespace std;

int main()
{

    vector<int> arr[4];

    arr[0].push_back(1);

    cout << arr[0][0];
    cout << arr[0][1];

    return 0;
}