// LeetCode #13 - Easy
// 02-15-22
// 17ms - Faster Than 51.08%
// 6.8MB - Less Than 60.09%
#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    int sToInt(char x) {
        if (x == 'I') {
            return 1;
        } else if (x == 'V') {
            return 5;
        } else if (x == 'X') {
            return 10;
        } else if (x == 'L') {
            return 50;
        } else if (x == 'C') {
            return 100;
        } else if (x == 'D') {
            return 500;
        } else if (x == 'M') {
            return 1000;
        } else {
            return 0;
        }
    }
    
    int romanToInt(string s) {
        vector<int> vArr;
        int total = 0;
        int sub = 0;

        for (int i = 0; i < s.size(); i++) {
            vArr.push_back(sToInt(s[i]));
        }
        int vs = vArr.size();
        for (int i = 0; i < vs; i++) {
            if (i+1 < vs) {
                if (vArr[i] < vArr[i+1]) {
                    sub = sub + vArr[i];
                } else {
                total = total + vArr[i];
                }
            } else {
                total = total + vArr[i];
            }
        }
    return total - sub;
    }
};