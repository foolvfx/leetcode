// LeetCode #20 - Easy
// 03-13-22
// 87ms - Faster Than 53.00%
// 42.2MB - Less Than 55.72%
const brackets = { '[':']', '(':')', '{':'}' };
var isValid = function(s) {
    const order = [];
    for (let c of s) {
        if (c in brackets) {
            order.unshift(brackets[c]);
        } else {
            if (order[0] !== c) return false;
            order.shift();
        }
    }
    return order.length !== 0 ? false : true;
}

let x = isValid('[]')
console.log(x);