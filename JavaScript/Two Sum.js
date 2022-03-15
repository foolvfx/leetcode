// LeetCode #1 - Easy
// 03-14-22
// 80ms - Faster Than 84.47%
// 45.3MB - Less Than 6.10%
var twoSum = function(nums, target)
{
    const map = new Map();

    for (let i in nums)
    {
        let num = nums[i];
        let difference = target - num;

        if (map.has(difference)) return [i, map.get(difference)];

        map.set(num, i);
    }
}

console.log(twoSum([2,7,11,15], 9))