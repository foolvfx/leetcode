// LeetCode #125 - Easy
// 03-03-22
// 80ms - Faster Than 84.35%
// 46.6MB - Less Than 32.69%
const nonAlpha = 'A!@#b$%^c&*(';

var isPalindrome = function(s)
{
    let str = s;
    str = str.replace(/[^a-z0-9]/gi, '');
    str = str.toLowerCase();
    let rstr = "";

    for (let i = str.length - 1; i >= 0; i--)
    {
        rstr += str[i];
    }

    if (rstr != str)
    {
        return false;
    }
    return true;
};