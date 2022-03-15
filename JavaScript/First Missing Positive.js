// LeetCode #41 - Hard
// 03-09-22
// 154ms - Faster Than 55.21%
// 77.5MB - Less Than 32.39%
var firstMissingPositive = function(nums) {
    nums = nums.filter((x) => x > 0)
    nums.sort((a,b) => a-b)
    if (nums[0] !== 1) return 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i]-nums[i-1] > 1) return nums[i-1]+1;
    }
    return nums[nums.length-1]+1;
};

console.log(firstMissingPositive([0,2,2,1,1]))