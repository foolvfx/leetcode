// LeetCode #217 - Easy
// 03-14-22
// 80ms - Faster Than 96.75%
// 51.4MB - Less Than 27.24%
var containsDuplicate1 = function(nums) // <- Slow as FUCK
{
    while (nums.length > 0) {
        let n = nums.pop();
        if (nums.includes(n)) return true;
    }
    return false;
}

var containsDuplicate = function(nums) // <- O(n) with Set
{
    let set = new Set()
    for (let i of nums)
    {
        if (set.has(i)) return true;
        set.add(i)
    }
    return false;
}

console.log(containsDuplicate([1,2,3,4]))