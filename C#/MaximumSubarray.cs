// LeetCode #53 - Easy
// 03-19-22
// 364ms Faster Than 20.50%
// 48.8MB Less Than 48.62%
using System;

namespace LeetCode
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Solution sol = new Solution();
        }
    }

    public class Solution
    {
        public int MaxSubArray(int[] nums)
        {
            int max = nums[0];
            for (int i = 1; i < nums.Length; i++)
            {
                nums[i] = Math.Max(nums[i], nums[i] + nums[i-1]);
                if (nums[i] > max)
                    max = nums[i];
            }
            return max;
        }
    }
}