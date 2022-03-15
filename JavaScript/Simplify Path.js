// LeetCode #71 - Medium
// 03-13-22
// 117ms - Faster Than 25.44%
// 43.9MB - Less Than 72.94%
var simplifyPath = function(path)
{
    path = path.replaceAll('//', '/');
    const paths = path.split('/');
    const canonicalPath = [];
    paths.forEach(str => {
        if (str === '..') {
            canonicalPath.pop();
        } else if (str !== '' && str !== '.') {
            canonicalPath.push(str);
        }
    })
    return '/' + canonicalPath.join('/');
}

let solution = simplifyPath("/a/./b/../../c/")
console.log(solution)