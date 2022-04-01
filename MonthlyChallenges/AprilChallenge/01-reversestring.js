// LeetCode #344 - Easy
// 04-01-2022
// 88ms Faster Than 93.93%
// 49.2MB Less Than 71.93%

var reverseString = function(s)
{
    let midpoint = s.length / 2

    let k = s.length-1
    for (let i = 0; i < midpoint; i++)
    {
        let temp = s[i]
        s[i] = s[k]
        s[k] = temp
        k--
    }
    return s
}

console.log(reverseString('hellomynameisnikoandthisisaleetcodeproblem'.split('')))