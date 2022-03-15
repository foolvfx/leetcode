// LeetCode #75 - Medium
// 03-03-22
// 34ms - Faster Than 0.00%
// 8.6MB - Less Than 0.00% <- LOL
#include <vector>
using namespace std;

class Solution
{
public:
    void sortColors(vector<int>& nums)
    {
        if (nums.size() < 2)
            return;
        bubSort(nums);
    }

    void bubSort(vector<int>& nums)
    {
        for (int i = 0; i < nums.size()-1; i++)
        {
            if (nums[i] > nums[i+1])
            {
                int temp = nums[i];
                nums[i] = nums[i+1];
                nums[i+1] = temp;
                bubSort(nums);
            }
            if (nums[i] < nums[i+1] && i == nums.size()-1)
                return;
        }
    }
};