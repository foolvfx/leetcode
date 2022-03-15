// LeetCode #53 - Easy
// 03-14-22
// 130ms - Faster Than 35.84%
// 50.2MB - Less Than 60.59%
var maxSubArray = function(nums)
{
    let max = nums[0]
    for (let i = 1; i < nums.length; i++)
    {
        nums[i] = Math.max(nums[i], nums[i] + nums[i-1]); // <- Kadane's Algorithm
        if (nums[i] > max) max = nums[i];
    }
    return max;
}

console.log(maxSubArray([1]))