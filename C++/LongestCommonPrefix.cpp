// LeetCode #14 - Easy
// 03-02-22
// 0ms - Faster Than 100.00%
// 9.2MB - Less Than 44.64%
#include <vector>
#include <string>
using namespace std;

class Solution
{
public:
    string longestCommonPrefix(vector<string>& strs)
    {
        string x = "";

        if (strs.size() == 0)
            return x;
        else if (strs.size() == 1)
            return strs[0];
        
        int shortest = strs[0].size();
        for (int i = 1; i < strs.size(); i++)
        {
            if (strs[i].size() < shortest)
                shortest = strs[i].size();
        }

        for (int i = 0; i < shortest; i++)
        {
            char temp = strs[0][i];
            for (int k = 1; k < strs.size(); k++)
            {
                if (strs[k][i] != temp)
                    return x;
            }
            x.push_back(temp);
        }

        return x;
    }
};