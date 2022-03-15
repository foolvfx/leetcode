// LeetCode #12 - Medium
// 02-15-22
// 0ms - Faster Than 100.00%
// 5.8MB - Less Than 99.27%
#include <string>
using namespace std;

class Solution
{
public:
    struct Roman
    {
        string name;
        int value;
        Roman(string x, int y)
        {
            name = x;
            value = y;
        }
    };
    Roman arr[13] = {
        {"I",1},
        {"IV",4},
        {"V",5},
        {"IX",9},
        {"X",10},
        {"XL",40},
        {"L",50},
        {"XC",90},
        {"C",100},
        {"CD",400},
        {"D",500},
        {"CM",900},
        {"M",1000}};
    string intToRoman(int num)
    {
        string res = "";
        int x = num;
        for (int i = 12; i >= 0; i--)
        {
            while (x >= arr[i].value)
            {
                x = x - arr[i].value;
                res = res + arr[i].name;
            }
        }
        return res;
    }    
};