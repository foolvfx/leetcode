// LeetCode #1672 - Easy
// 03-19-22
// 124ms Faster Than 44.92%
// 37.3MB Less Than 88.47%
using System;

namespace LeetCode
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Solution sol = new Solution();
            int[][] accs = { new int[] { 1, 2, 3 }, new int[] { 3, 2, 1 } };
            int resp = sol.MaximumWealth(accs);
            Console.WriteLine(resp);
        }
    }

    public class Solution
    {
        public int MaximumWealth(int[][] accounts)
        {
            int MaxWealth = 0;
            for (int i = 0; i < accounts.Length; i++)
            {
                int wealth = 0;
                for (int j = 0; j < accounts[i].Length; j++)
                {
                    wealth += accounts[i][j];
                }
                if (wealth > MaxWealth)
                    MaxWealth = wealth;
            }
            return MaxWealth;
        }
    }
}