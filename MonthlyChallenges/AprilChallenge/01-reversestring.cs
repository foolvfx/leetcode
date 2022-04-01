// LeetCode #344 - Easy
// 04-01-2022
// 274ms Faster Than 74.95%
// 48MB Less Than 57.31%
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
        public void ReverseString(char[] s)
        {
            int midpoint = s.Length / 2;

            int k = s.Length - 1;
            for (int i = 0; i < midpoint; i++)
            {
                char temp = s[i];
                s[i] = s[k];
                s[k] = temp;
                k--;
            }
        }
    }
}