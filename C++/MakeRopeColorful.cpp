// LeetCode #1578 - Medium
// 02-19-22
// 189ms - Faster Than 64.65%
// 99.8MB - Less Than 10.63%
#include <vector>
#include <string>
using namespace std;

class Solution
{
public:
    int minCost(string colors, vector<int>& neededTime)
    {
        vector<int> times;
        char currColor = colors[0];
        int totalRemoveTime = 0;
        for (int i = 0; i < colors.size(); i++)
        {
            if (currColor == colors[i])
            {
                times.push_back(neededTime[i]);
            }

            if ((times.size() > 1 && currColor != colors[i]) || (i+1 == colors.size() && times.size() > 1))
            {
                int totalTimes = times[0];
                int maxTime = times[0];

                for (int k = 1; k < times.size(); k++)
                {
                    if (times[k] > maxTime)
                    {
                        maxTime = times[k];
                    }
                    totalTimes = totalTimes + times[k];
                }
                totalRemoveTime = totalRemoveTime + totalTimes - maxTime;
                currColor = colors[i];
                times.clear();
                times.push_back(neededTime[i]);
            } else if (currColor != colors[i])
            {
                currColor = colors[i];
                times.clear();
                times.push_back(neededTime[i]);
            }
        }

        return totalRemoveTime;
    }
};