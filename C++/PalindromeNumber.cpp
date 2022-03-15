// LeetCode #9 - Easy
// 02-15-22
// 34ms - Faster Than 16.39%
// 6MB - Less Than 33.15%
#include <string>

class Solution {
public:
    bool isPalindrome(int x) {
        std::string s = std::to_string(x);
        std::string rs;
        for (int i = s.size() - 1; i >= 0; i--) {
            rs.push_back(s[i]);
        }
        for (int i = 0; i < s.size(); i++) {
            if (s[i] != rs[i]) {
                return false;
            }
        }
        return true;
    }
};