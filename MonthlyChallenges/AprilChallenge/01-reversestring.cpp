// LeetCode #344 - Easy
// 04-01-2022
// 32ms Faster Than 45.20%
// 23.2MB Less Than 76.65%
#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    void reverseString(vector<char>& s)
    {
        int midpoint = s.size() / 2;

        int k = s.size()-1;
        for (int i = 0; i < midpoint; i++)
        {
            char temp = s[i];
            s[i] = s[k];
            s[k] = temp;
            k--;
        }
    }
};