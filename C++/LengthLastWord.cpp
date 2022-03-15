// LeetCode #58 - Easy
// 02-15-22
// 3ms - Faster Than 61.20%
// 6.6MB - Less Than 52.22%
#include <iostream>
#include <string>
using namespace std;

class Solution {
public:
    int lengthOfLastWord(string s) {
        int x = s.size() - 1;
        char last = s[x];
        int b = 0;
        int e = x;
        for (int i = x - 1; i > -1; i--)
        {
            if (last == ' ' && s[i] != ' ')
            {
                e = i;
            }
            if (s[i] == ' ' && last != ' ')
            {
                b = i;
                return e-b;
            } else if (e == 0) {
                return 1;
            }
            last = s[i];
        }
        return e-b+1;
    }
};