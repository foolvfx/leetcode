// LeetCode #495 - Easy
// 02-15-22
// 60ms - Faster Than 50.85%
// 25.9MB - Less Than 64.66%
#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    int findPoisonedDuration(vector<int>& timeSeries, int duration)
    {
        unsigned int x = 0;
        for (int i = 0; i < timeSeries.size(); i++)
        {
            if (timeSeries.size() > i+1)
            {
                if (timeSeries[i] + duration - 1 >= timeSeries[i+1])
                {
                x += (timeSeries[i] + duration) - timeSeries[i+1];
                }
            }
        }
        return (timeSeries.size() * duration) - x;
    }
};