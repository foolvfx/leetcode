// LeetCode #387 - Easy
// 03-18-22
// 117ms Faster Than 74.67%
// 48.3MB Less Than 23.86%
var firstUniqChar = function(s)
{
    let chars = new Set()
    for (let i = 0; i < s.length; i++)
    {
        if (!s.slice(i+1).includes(s[i]) && !chars.has(s[i])) return i
        chars.add(s[i])
    }
    return -1
}

console.log(firstUniqChar('aabb'))