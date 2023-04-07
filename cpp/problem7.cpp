#include <iostream>
using namespace std;

int main()
{

    int antal = 0;

    int testtal = 2;
    int test = 2;
    for (; antal != 10001; test++)
    {
        testtal = 2;

        for (; testtal <= test; testtal++)
        {
            if (test % testtal == 0 && testtal != test)
            {
                break;
            }

            else if (testtal == test)
            {
                antal += 1;
            }
        }
    }

    cout << test;

    return 0;
}