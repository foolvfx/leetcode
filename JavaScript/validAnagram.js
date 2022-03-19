// LeetCode #242 - Easy
// 03-18-22
// 148ms Faster Than 23.76%
// 48MB Less Than 22.57%
var isAnagram = function(s, t)
{
    const sa = s.split('').sort().join('')
    const ta = t.split('').sort().join('')
    return sa === ta
}

console.log(isAnagram('abcda', 'absdca'))