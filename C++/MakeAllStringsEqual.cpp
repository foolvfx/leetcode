// LeetCode #1897 - Easy
// 03-02-22
// 23ms - Faster Than 59.01%
// 11.6MB - Less Than 86.94%
#include <vector>
#include <string>
using namespace std;

class Solution
{
public:
    bool makeEqual(vector<string>& words)
    {
        if (words.size() == 1)
            return true;
        int arr[26] { 0 };
        for (int i = 0; i < words.size(); i++)
        {
            for (int k = 0; k < words[i].size(); k++)
            {
                arr[words[i][k]-97]++;
            }
        }
        for (int i = 0; i < 26; i++)
        {
            if (arr[i] != 0 && arr[i] % words.size() != 0)
                return false;
        }
        return true;
    }
};