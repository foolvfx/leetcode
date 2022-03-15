// LeetCode #1249 - Medium
// 03-14-22
// 132ms - Faster Than 54.18%
// 64.3MB - Less Than 0.00%
var minRemoveToMakeValid = function(s)
{
    const str = s.split('');
    const brac = [];
    for (let i in s) {
        if (s[i] == '(') {
            brac.push(i);
        } else if (s[i] == ')') {
            brac.length > 0 ? brac.pop() : delete str[i];
        }
    }
    for (let i of brac) {
        delete str[i]
    }
    return str.join('')
}

console.log(minRemoveToMakeValid('abc)(((de(d)asdojn)asjd)'))