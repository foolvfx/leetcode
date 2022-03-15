// LeetCode #36 - Medium
// 02-17-22
// 23ms - Faster Than 82.33%
// 17.9MB - Less Than 97.06%
#include <vector>
using namespace std;

class Solution
{
public:
    bool isValidSudoku(vector<vector<char>>& board)
    {
        bool row[9][9] { false };
        bool col[9][9] { false };
        bool box[9][9] { false };

        int boxTable[9][9] {{0,0,0,1,1,1,2,2,2},
                            {0,0,0,1,1,1,2,2,2},
                            {0,0,0,1,1,1,2,2,2},
                            {3,3,3,4,4,4,5,5,5},
                            {3,3,3,4,4,4,5,5,5},
                            {3,3,3,4,4,4,5,5,5},
                            {6,6,6,7,7,7,8,8,8},
                            {6,6,6,7,7,7,8,8,8},
                            {6,6,6,7,7,7,8,8,8}};

        for (int i = 0; i < board.size(); i++)
        {
            for (int k = 0; k < board[i].size(); k++)
            {
                if (board[i][k] != '.')
                {
                    int val = board[i][k] - 49;

                    int bIndex = boxTable[i][k];

                    if (row[i][val] || col[k][val] || box[bIndex][val])
                    {
                        return false;
                    }
                    else
                    {
                        row[i][val] = true;
                        col[k][val] = true;
                        box[bIndex][val] = true;
                    }
                }
            }
        }
        return true;
    }
};