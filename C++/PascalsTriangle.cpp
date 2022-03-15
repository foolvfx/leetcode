// LeetCode #118 - Easy
// 03-02-22
// 0ms - Faster Than 100.00%
// 6.5MB - Less Than 0.00%
#include <vector>
using namespace std;

class Solution
{
public:
    vector<vector<int>> generate(int numRows)
    {
        vector<vector<int>> x(numRows);
        x[0].push_back(1);
        for (int i = 1; i < numRows; i++)
        {
            x[i].push_back(1);
            for (int k = 1; k < x[i-1].size(); k++)
            {
                x[i].push_back(x[i-1][k-1] + x[i-1][k]);
            }
            x[i].push_back(1);
        }
        return x;
    }
};